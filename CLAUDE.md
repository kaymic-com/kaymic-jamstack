# CLAUDE.md

Personal site and blog, served in production at **https://kaymic.com**. Nuxt 4 + Vue 3 + TypeScript, styled with Nuxt UI / Tailwind 4, content from Contentful, hosted on Netlify.

## Git workflow

- Never commit directly to `main`. Every feature or fix gets its own branch and lands through a pull request.
- Name branches with a conventional prefix: `feat/`, `fix/`, `chore/`, `refactor/`, `docs/`, e.g. `feat/blog-search`.
- Write commit messages in Conventional Commits style: `feat: …`, `fix: …`, `chore: …`, `refactor: …`, `docs: …`.
- Open PRs against `main`. Netlify builds a **deploy preview** for every PR at `https://deploy-preview-<PR number>--kaymic.netlify.app`. Its result is the `netlify/kaymic/deploy-preview` commit status on the PR. Share the preview link once it's ready, and load the preview yourself to check the change before asking for a merge.
- Merging: Claude may merge a PR only after the user approves in chat **and** the Netlify preview build has passed. Never merge without that explicit OK.
- Merge with a regular merge commit (not squash or rebase) to match the repo's history.
- Cloud sessions can push only to their assigned `claude/...` branch, so the branch-prefix rule can't apply there. Commit messages still follow Conventional Commits. After that branch's PR merges, restart the branch from the latest `main` for the next PR.

## Contentful

- The Contentful MCP connector has access to the content that drives the site: space `o8imejr6xrko`, environment `master`.
- Content changes go live without a PR or deploy preview, so **confirm every change with the user before making it**: creating, editing, publishing, unpublishing, archiving or deleting entries and assets, and any content-type (schema) change. State exactly what will change before doing it.
- Before editing an entry, fetch it for its current `sys.version`. Inspect the content type before querying on field names.
- Content types: `page`, `article`, `project`, `employer`, `settings`, `sidebarItem`, `socialPlatform`.
  - `page.slug` must start with `/`; `article.slug` must start with `/blog/`.
  - `sidebarItem.component` is limited to `ContactForm`, `EmploymentHistory`, `ContactInfo`, `Headshot`, which map to components in `app/components/`.
  - `settings.homeImages` must contain exactly 5 assets.
- A schema change in Contentful usually needs matching code changes (types, API routes, components). Make those on a branch + PR.

## Project layout

- `app/`: Nuxt app (pages, components, composables, layouts, plugins, `utils/`).
- `server/api/v1/`: Nitro API routes that read from Contentful (`pages`, `articles`, `projects`, `employers`, `settings`). The client is `server/utils/contentful.ts`; caching is in `server/utils/cache-helper.ts`.
- `shared/types/contentful/`: **generated** Contentful types; don't hand-edit. `modules/contentful-typegen.ts` regenerates them on `nuxt dev` / `nuxt build` with `cf-content-types-generator`, which needs `NUXT_CONTENTFUL_SPACE_ID` and `NUXT_CONTENTFUL_MANAGEMENT_TOKEN`.
- `shared/types/entries.ts`: hand-written entry types built on the generated ones.

## Development

- Package manager: **bun** (`bun.lock`).
- `bun install`, `bun run dev`, `bun run build`, `bun run generate`, `bun run preview`.
- Env vars (see `.env.example`): `NUXT_CONTENTFUL_SPACE_ID`, `NUXT_CONTENTFUL_ACCESS_TOKEN`, `NUXT_CONTENTFUL_ENVIRONMENT`, `NUXT_CONTENTFUL_MANAGEMENT_TOKEN`, `NUXT_CONTENTFUL_PREVIEW_TOKEN`, `NUXT_CONTENTFUL_PREVIEW_SECRET`. Never commit `.env`.
- There's no test or lint script yet. Verify changes with `bun run build` and the Netlify deploy preview.
- `nuxt dev` and `bun run build` fail immediately without `NUXT_CONTENTFUL_SPACE_ID` and `NUXT_CONTENTFUL_MANAGEMENT_TOKEN`, because the typegen module requires them. Cloud sessions don't have these keys, so there the Netlify deploy preview is the build check. To preview a UI change before committing, render the components in a separate Nuxt app in the scratchpad with the same `@nuxt/ui` version, `app/assets/css/main.css` and `app/app.config.ts`.
- Cloud sessions can reach the deploy previews (`*.netlify.app`) and production (`kaymic.com`) for checks.
