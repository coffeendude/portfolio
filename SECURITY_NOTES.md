SECURITY NOTES
=============

Summary
- Scanned current working tree and commit history for literal secrets and key-like tokens (EmailJS service/template IDs, public keys, long quoted tokens, common secret keywords).
- Removed local `.history/` snapshots earlier and verified `.history` is not present now.

Findings
- No literal EmailJS private keys, provider passwords, OAuth client secrets, access tokens, or other confirmed sensitive credentials were found in the current tree or in the commit diffs searched.
- The frontend intentionally references `import.meta.env.VITE_SERVICE`, `VITE_TEMPLATE`, and `VITE_PUBLIC_KEY` in `src/components/Contact.jsx` — these are browser-facing identifiers and acceptable only if they are non-secret.

Controls and Recommendations
- Never store private credentials in Vite-exposed env variables (any `VITE_` variable is included in the browser bundle). Keep only public IDs (service ID, template ID, public key) there.
- Keep `.env`, `.env.local`, and `.env.*.local` listed in `.gitignore` (already added) and store private secrets in a secure vault or CI secret store.
- CI now runs `scripts/check-secrets.sh` to detect literal tokens; refine the script if you need stricter or different patterns for your environment.
- If you discover a confirmed secret exposure later (literal secret in any commit), do NOT perform an in-place fix without a coordinated plan: prepare a history-rewrite using `git-filter-repo` or BFG, force-push, and instruct collaborators to re-clone or rebase.

Next Steps
- Rotate any credentials only if you have confirmed they were present in past commits or external snapshots.
- Replace any placeholder or draft content that contains unverified claims before publishing.

Generated: 2026-07-29
