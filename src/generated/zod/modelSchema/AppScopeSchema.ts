import { z } from 'zod';

/////////////////////////////////////////
// APP SCOPE SCHEMA
/////////////////////////////////////////

/**
 * AppScope: Represents a permission scope for an app
 * @group App
 */
export const AppScopeSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullable(),
  category: z.string().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
})

export type AppScope = z.infer<typeof AppScopeSchema>

export default AppScopeSchema;
