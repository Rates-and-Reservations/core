import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { AppInstallStatusSchema } from '../inputTypeSchemas/AppInstallStatusSchema'

/////////////////////////////////////////
// APP INSTALL SCHEMA
/////////////////////////////////////////

/**
 * AppInstall: Represents an installed instance of an app
 * @group App
 */
export const AppInstallSchema = z.object({
  status: AppInstallStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  appId: z.string(),
  config: JsonValueSchema.nullable(),
  installedAt: z.coerce.date().nullable(),
  uninstalledAt: z.coerce.date().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type AppInstall = z.infer<typeof AppInstallSchema>

export default AppInstallSchema;
