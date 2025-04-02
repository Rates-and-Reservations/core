import { z } from 'zod';

export const AppInstallStatusSchema = z.enum(['PENDING','ACTIVE','SUSPENDED','UNINSTALLED']);

export type AppInstallStatusType = `${z.infer<typeof AppInstallStatusSchema>}`

export default AppInstallStatusSchema;
