# Gootzza

Plateforme de repas chez l'habitant : des hôtes cuisinent un repas de leur culture, des voyageurs réservent une place à leur table.

Stack : SvelteKit 3 (TypeScript strict), Prisma 7, PostgreSQL, Zod, Vitest.

## Prérequis

- Node.js 22.12 ou plus récent
- PostgreSQL en local (ex. `brew install postgresql@17 && brew services start postgresql@17`)

## Démarrer

```sh
npm install
createdb gootzza
cp .env.example .env   # puis renseigner DATABASE_URL
npm run db:migrate     # applique les migrations
npm run dev
```

Avec PostgreSQL Homebrew, l'URL locale est `postgresql://<utilisateur-mac>@localhost:5432/gootzza`.

Les variables d'environnement sont déclarées et validées dans `src/env.ts` : l'app refuse de démarrer si l'une d'elles est absente ou invalide.

## Scripts

| Script                              | Rôle                                                     |
| ----------------------------------- | -------------------------------------------------------- |
| `npm run dev`                       | Serveur de développement                                 |
| `npm run build` / `npm run preview` | Build de production et prévisualisation                  |
| `npm run lint`                      | Prettier + ESLint (`any` interdit)                       |
| `npm run format`                    | Formatage Prettier                                       |
| `npm run check`                     | Vérification des types (svelte-check)                    |
| `npm test`                          | Tests Vitest : serveur (Node) et composants (navigateur) |
| `npm run db:migrate`                | Crée et applique une migration en développement          |
| `npm run db:deploy`                 | Applique les migrations en production                    |
| `npm run db:generate`               | Régénère le client Prisma                                |
| `npm run db:studio`                 | Interface de consultation de la base                     |

Les tests de composants tournent dans Chromium : la première fois, lancer `npx playwright install chromium --only-shell`.

## Organisation

- `src/env.ts` : variables d'environnement validées avec Zod
- `src/lib/schemas/` : schémas Zod partagés serveur / front
- `src/lib/server/db/` : client Prisma (le client généré dans `generated/` n'est pas versionné)
- `prisma/` : schéma et migrations

## Conventions

- Une fonctionnalité = une branche = une PR vers `main`.
- Toute donnée entrante est validée côté serveur avec Zod.
- Aucun `any` : `unknown` + validation Zod quand le type n'est pas connu.
- Lint, types et tests au vert avant de proposer une PR.
