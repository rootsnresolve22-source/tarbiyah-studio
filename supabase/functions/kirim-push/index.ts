// Edge Function: kirim-push — pengingat runtunan/amalan via Web Push (VAPID).
// Deploy : supabase functions deploy kirim-push
// Jadwal : supabase functions schedule create harian --cron "0 12 * * *" --function kirim-push
// Rahasia: supabase secrets set VAPID_PUBLIC_KEY=... VAPID_PRIVATE_KEY=... VAPID_SUBJECT=mailto:halo@contoh.id
// Buat kunci sekali: npx web-push generate-vapid-keys
import { createClient } from "jsr:@supabase/supabase-js@2";
import webpush from "npm:web-push@3";

Deno.serve(async () => {
  webpush.setVapidDetails(
    Deno.env.get("VAPID_SUBJECT")!,
    Deno.env.get("VAPID_PUBLIC_KEY")!,
    Deno.env.get("VAPID_PRIVATE_KEY")!,
  );
  const sb = createClient(Deno.env.get("SUPABASE_URL")!, Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!);
  const { data: subs, error } = await sb.from("tarbiyah_push").select("id, subscription");
  if (error) return new Response(error.message, { status: 500 });
  let ok = 0, gugur = 0;
  for (const row of subs ?? []) {
    try {
      await webpush.sendNotification(row.subscription, JSON.stringify({
        title: "TARBIYAH", body: "Satu modul kecil hari ini — jaga runtunanmu.",
      }));
      ok++;
    } catch (_e) {
      gugur++; await sb.from("tarbiyah_push").delete().eq("id", row.id); // langganan kedaluwarsa dibersihkan
    }
  }
  return new Response(JSON.stringify({ terkirim: ok, dibersihkan: gugur }), { headers: { "content-type": "application/json" } });
});
