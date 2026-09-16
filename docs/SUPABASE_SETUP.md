# Supabase Setup

1. Create a dedicated LISTEN Supabase project when account capacity is available.
2. Add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` to `.env.local`; never commit service-role keys.
3. Run `supabase/schema.sql` in the SQL editor.
4. Enable and test authentication before enabling participant-only pages.
5. Test every RLS policy using two separate test users. A participant must never be able to read another participant's assessments, progress, or reflections.
6. Keep public registration/inquiry endpoints server-mediated and add abuse protection before production launch.

v0.4 does not require a live Supabase project to run the public site.
