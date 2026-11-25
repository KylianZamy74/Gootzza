import { describe, expect, it } from 'vitest';
import { databaseUrlSchema } from './env';

describe('databaseUrlSchema', () => {
	it('accepte une URL PostgreSQL', () => {
		expect(databaseUrlSchema.safeParse('postgresql://user@localhost:5432/gootzza').success).toBe(
			true
		);
		expect(
			databaseUrlSchema.safeParse('postgres://u:p@host.neon.tech/db?sslmode=require').success
		).toBe(true);
	});

	it('refuse une valeur absente, vide ou un autre protocole', () => {
		for (const value of [undefined, '', 'mysql://localhost/db', 'pas-une-url']) {
			expect(databaseUrlSchema.safeParse(value).success).toBe(false);
		}
	});
});
