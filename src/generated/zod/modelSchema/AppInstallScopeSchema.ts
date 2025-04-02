import { z } from 'zod';

/////////////////////////////////////////
// APP INSTALL SCOPE SCHEMA
/////////////////////////////////////////

export const AppInstallScopeSchema = z.object({
  id: z.string().cuid(),
  appInstallId: z.string(),
  scopeId: z.string(),
  createdAt: z.coerce.date(),
})

export type AppInstallScope = z.infer<typeof AppInstallScopeSchema>

export default AppInstallScopeSchema;
