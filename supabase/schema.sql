-- THE LISTEN MODEL™ v0.4 Supabase baseline
-- Run only in a dedicated LISTEN project after review.
create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  organization text,
  role_title text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create table if not exists public.pilot_registrations (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete set null,
  email text not null,
  full_name text not null,
  organization_role text,
  participation_type text,
  learning_goal text,
  practice_context text,
  preferred_format text,
  availability text,
  feedback_consent boolean not null default false,
  status text not null default 'submitted',
  created_at timestamptz not null default now()
);
create table if not exists public.assessment_responses (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  assessment_key text not null, responses jsonb not null, created_at timestamptz not null default now()
);
create table if not exists public.assessment_results (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  assessment_key text not null, result jsonb not null, created_at timestamptz not null default now()
);
create table if not exists public.modules (
  id uuid primary key default gen_random_uuid(), slug text unique not null, title text not null,
  access_level text not null default 'participant', sort_order integer not null default 0, is_active boolean not null default true,
  created_at timestamptz not null default now()
);
create table if not exists public.module_progress (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  module_id uuid not null references public.modules(id) on delete cascade, status text not null default 'not_started',
  started_at timestamptz, completed_at timestamptz, updated_at timestamptz not null default now(), unique(user_id,module_id)
);
create table if not exists public.reflection_entries (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  module_id uuid references public.modules(id) on delete set null, prompt_key text, reflection_text text not null,
  created_at timestamptz not null default now(), updated_at timestamptz not null default now()
);
create table if not exists public.training_sessions (
  id uuid primary key default gen_random_uuid(), title text not null, starts_at timestamptz, ends_at timestamptz,
  delivery_format text, location_label text, created_at timestamptz not null default now()
);
create table if not exists public.attendance (
  id uuid primary key default gen_random_uuid(), session_id uuid not null references public.training_sessions(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade, status text not null default 'registered',
  created_at timestamptz not null default now(), unique(session_id,user_id)
);
create table if not exists public.inquiries (
  id uuid primary key default gen_random_uuid(), full_name text not null, email text not null, organization text,
  message text, status text not null default 'new', created_at timestamptz not null default now()
);
create table if not exists public.consent_records (
  id uuid primary key default gen_random_uuid(), user_id uuid not null references auth.users(id) on delete cascade,
  consent_type text not null, consent_version text not null, granted boolean not null,
  recorded_at timestamptz not null default now()
);

alter table public.profiles enable row level security;
alter table public.assessment_responses enable row level security;
alter table public.assessment_results enable row level security;
alter table public.module_progress enable row level security;
alter table public.reflection_entries enable row level security;
alter table public.attendance enable row level security;
alter table public.consent_records enable row level security;

create policy "profiles own row" on public.profiles for all using (auth.uid()=id) with check (auth.uid()=id);
create policy "assessment responses own rows" on public.assessment_responses for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "assessment results own rows" on public.assessment_results for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "module progress own rows" on public.module_progress for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "reflection entries own rows" on public.reflection_entries for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
create policy "attendance own rows" on public.attendance for select using (auth.uid()=user_id);
create policy "consent own rows" on public.consent_records for all using (auth.uid()=user_id) with check (auth.uid()=user_id);
