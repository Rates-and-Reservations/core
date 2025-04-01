import { z } from 'zod';

export const OrganisationRolesSchema = z.enum(['OWNER','ADMIN','STAFF','DEVELOPER']);

export type OrganisationRolesType = `${z.infer<typeof OrganisationRolesSchema>}`

export default OrganisationRolesSchema;
