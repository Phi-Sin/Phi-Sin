# Profile maintenance

This repository is intended for the public `Phi-Sin/Phi-Sin` profile repository.

## Publish

Merge or copy the README, assets, scripts and `.github/workflows/profile.yml` to the default `main` branch. Keep `SETUP.md` for maintenance. The README images use relative paths.

The workflow runs on relevant script/workflow pushes, manually from Actions, and at 02:23 and 14:23 UTC (09:23 and 21:23 UTC+7). Scheduled workflows may be delayed; GitHub may disable public scheduled workflows after 60 days without repository activity. Re-enable from Actions if needed.

The built-in `GITHUB_TOKEN` is sufficient; no personal access token or external statistics service is required. Repository policy must allow Actions and `contents: write`. Protected branches can block the automatic commit; adjust the workflow to use a PR if branch policy requires reviews.

## Edit

- Biography, project descriptions, skills and social destinations: `README.md`.
- Hero, social button graphics and footer: `scripts/build-assets.mjs`, then `node scripts/build-assets.mjs`.
- Public dashboard: `scripts/update-profile.mjs`, then `node scripts/update-profile.mjs` (Node 22+).
- Do not edit content between the `SIGNAL` markers manually.

The public API snapshot counts original public repositories and their stars. Recent project pushes exclude the profile repository so bot refreshes do not dominate. A push timestamp is not a commit count or proof of project completion. API failure stops generation and retains the previous files. There is no private repository collection.

The SVG hero uses CSS animations with reduced-motion support. Actual rendering depends on the GitHub image viewer and browser. No JavaScript runs inside the README.

Roles and project stage are user-provided. Technologies are retained from the original profile as a development/learning toolkit; no proficiency levels, business impact numbers or finished-game claims have been invented.
