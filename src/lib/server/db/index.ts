import { DATABASE_URL } from '$app/env/private';
import { PrismaPg } from '@prisma/adapter-pg';
import { PrismaClient } from './generated/client';

// Client unique pour tout le serveur.
export const db = new PrismaClient({ adapter: new PrismaPg({ connectionString: DATABASE_URL }) });
