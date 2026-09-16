# LISTEN Data Model — v0.4 Baseline

The live Supabase project is intentionally deferred while existing free projects remain active. `supabase/schema.sql` is a deployment-ready baseline for a future dedicated LISTEN project.

Core entities: profiles/participants, pilot registrations, assessment responses/results, modules, module progress, reflection entries, training sessions, attendance, inquiries, and consent records.

Privacy principle: collect the minimum needed for program delivery and evidence of participation. Participant reflections can contain sensitive narrative content, so they must be private by default and protected with row-level security. Public website forms should not request clinical or diagnostic information.
