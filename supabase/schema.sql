-- TARBIYAH — skema sinkron progres & push (jalankan via SQL editor / migration)
create table if not exists public.tarbiyah_progress (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);
alter table public.tarbiyah_progress enable row level security;
create policy "progres milik sendiri - baca"  on public.tarbiyah_progress for select using (auth.uid() = user_id);
create policy "progres milik sendiri - tulis" on public.tarbiyah_progress for insert with check (auth.uid() = user_id);
create policy "progres milik sendiri - ubah"  on public.tarbiyah_progress for update using (auth.uid() = user_id);

create table if not exists public.tarbiyah_push (
  id bigint generated always as identity primary key,
  user_id uuid references auth.users(id) on delete cascade,
  subscription jsonb not null,
  created_at timestamptz not null default now()
);
alter table public.tarbiyah_push enable row level security;
create policy "push milik sendiri - tulis" on public.tarbiyah_push for insert with check (auth.uid() = user_id);
create policy "push milik sendiri - baca"  on public.tarbiyah_push for select using (auth.uid() = user_id);
create policy "push milik sendiri - hapus" on public.tarbiyah_push for delete using (auth.uid() = user_id);
