import { z } from 'zod';

/////////////////////////////////////////
// APP INSTALL SCOPE SCHEMA
/////////////////////////////////////////

/**
 * @group App
 */
export const AppInstallScopeSchema = z.object({
  id: z.string().cuid(),
  appInstallId: z.string(),
  scopeId: z.string(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type AppInstallScope = z.infer<typeof AppInstallScopeSchema>

export default AppInstallScopeSchema;
