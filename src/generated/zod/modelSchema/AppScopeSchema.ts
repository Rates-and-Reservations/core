import { z } from 'zod';

/////////////////////////////////////////
// APP SCOPE SCHEMA
/////////////////////////////////////////

export const AppScopeSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullable(),
  createdAt: z.coerce.date(),
})

export type AppScope = z.infer<typeof AppScopeSchema>

export default AppScopeSchema;
