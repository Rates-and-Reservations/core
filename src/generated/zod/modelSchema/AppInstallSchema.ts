import { z } from 'zod';
import { AppInstallStatusSchema } from '../inputTypeSchemas/AppInstallStatusSchema'

/////////////////////////////////////////
// APP INSTALL SCHEMA
/////////////////////////////////////////

/**
 * @group App
 */
export const AppInstallSchema = z.object({
  status: AppInstallStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  appId: z.string(),
  installedAt: z.coerce.date().nullable(),
  uninstalledAt: z.coerce.date().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AppInstall = z.infer<typeof AppInstallSchema>

export default AppInstallSchema;
