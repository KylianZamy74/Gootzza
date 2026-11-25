import { existsSync } from 'node:fs';
import { defineConfig, env } from 'prisma/config';

// Charge .env en local ; en prod, les variables viennent de l'environnement.
if (existsSync('.env')) process.loadEnvFile();

export default defineConfig({
	schema: 'prisma/schema.prisma',
	migrations: { path: 'prisma/migrations' },
	datasource: { url: env('DATABASE_URL') }
});
