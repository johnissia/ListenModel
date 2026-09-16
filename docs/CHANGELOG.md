# Changelog

## v0.4.0 — 2026-09-13
- Corrected public framework to L = Listen; I = Interpret the Language; S = Specify the Goal; T = Tailor to the Style; E = Evaluate the Confidence, Commitment, and Show Compassion; N = Navigate the Support Strategy.
- Removed public framing that called Presence / Interpretation / Clarification / Reflection / Response the five stages of THE LISTEN MODEL™.
- Retained those concepts as foundational supporting practices.
- Reworked homepage, Model, Training, Founding Pilot, assessment framing, and Module 1 framing.
- Added canonical framework, public-content, protected-core, security, data-model, Supabase, invention-log, roadmap, and RLS documentation.
- Added a Supabase schema baseline for later deployment.

## v0.4 Production Milestone — September 2026

### Production deployment
- Deployed THE LISTEN MODEL™ website to Vercel from the `johnissia/ListenModel` GitHub repository.
- Established the production workflow: local development → GitHub `main` → Vercel.
- Corrected the initial deployment structure so the Next.js `app` directory and supporting application files are deployed directly rather than contained only within a ZIP archive.
- Production build verified successfully with Next.js 16.3.4.
- `npm audit` reported 0 vulnerabilities.

### Public framework integrity
- Public-facing content aligned with the confirmed six-part THE LISTEN MODEL™ orientation:
  - L — Listen
  - I — Interpret the Language
  - S — Specify the Goal
  - T — Tailor to the Style
  - E — Evaluate the Confidence, Commitment, and Show Compassion
  - N — Navigate the Support Strategy
- Presence, Interpretation, Clarification, Reflection, and Response remain supporting educational practices rather than replacements for the L.I.S.T.E.N. framework.
- Advanced practitioner lenses and protected operational material remain outside the public website.

### Forms and communications
- Training Request form tested successfully in production.
- Founding Pilot Registration form tested successfully in production.
- Resend integration verified through successful delivery to the designated Power Is Personal administrative email.
- Visitor success confirmations verified after successful submission.
- Corrected asynchronous form-reset handling in both production forms.
- Corrected character-encoding issues in form content.
- Completed site-wide scan of `app`, `components`, and `docs` for identified encoding-corruption patterns; no remaining matches were found.

### Supporting architecture
- Added project documentation for framework integrity, public-content boundaries, data architecture, Supabase planning, security/privacy, roadmap, trademark-use logging, and invention logging.
- Added initial `supabase/schema.sql` in preparation for future participant-system functionality.
- Live Supabase integration remains intentionally deferred to a later development phase.

### Status
v0.4 is considered deployed and operational as the public/pilot foundation for THE LISTEN MODEL™.
