import { defineEnvVars } from '@sveltejs/kit/env';
import { z } from 'zod';

export const databaseUrlSchema = z.url({
	protocol: /^postgres(ql)?$/,
	error: 'DATABASE_URL doit être une URL PostgreSQL (postgresql://…)'
});

// Validées au démarrage de l'app : elle refuse de démarrer si une variable est absente ou invalide.
export const variables = defineEnvVars({
	DATABASE_URL: {
		schema: databaseUrlSchema,
		description: 'URL de connexion PostgreSQL (locale en développement, Neon en production)'
	}
});
