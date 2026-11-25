# Schémas Zod partagés

Un fichier par domaine (`auth.ts`, `annonce.ts`…). Chaque schéma valide les données côté serveur et
fournit le type TypeScript utilisé par le front (`z.infer<typeof schema>`).
Les schémas propres au serveur (ex. variables d'environnement) restent à côté de leur code.
