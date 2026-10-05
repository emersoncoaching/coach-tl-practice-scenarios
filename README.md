# Coach Team Leader Practice Scenarios

Static GitHub Pages app for Coach Team Leader applicants to submit rich-text responses to two call reviews.

Target live site: https://emersoncoaching.github.io/coach-tl-practice-scenarios/

## Current Setup

- `config.js` points at the Supabase project for response storage.
- Run `supabase/schema.sql` in the Supabase SQL editor to create the Coach TL submission table and RPC functions.
- The two call-review videos are included in `assets/videos/`.
- Applicants complete six rich-text response fields for each call.
- Private review pages show the applicant's responses only; this version does not include reference answers.
- Dan reviews submissions from the private dashboard URL stored in `private/admin-dashboard.md`.
- Accept, Reject and Archive are available directly on the dashboard cards and review pages. Submissions are grouped into Open, Accepted, Rejected and Archived.
- Archive moves an open submission to Archived without sending an email or changing StarHire. Archived responses stay accessible and can be restored to Open.
- Reject asks for confirmation and uses the existing StarHire rejection action.
- Dan-facing dashboard and review pages require a one-time private-access password in each browser.
- New submissions appear in the private dashboard; no email delivery service is required.

## Private Dashboard Setup

The dashboard uses an unguessable `?admin=` URL and a Supabase RPC function that compares the token to a SHA-256 hash.

To enable storage, the dashboard, and review-status actions in Supabase, run `supabase/schema.sql` in the Supabase SQL editor.

The real admin token is not committed to GitHub. Keep `private/admin-dashboard.md` local.

For an existing database, apply `supabase/migrations/20261005000000_coach_tl_archived_status.sql` to enable archiving.

The private-access password itself is not committed; the public app stores only the SHA-256 hash used for the browser gate.
