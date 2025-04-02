import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// API KEY SCHEMA
/////////////////////////////////////////

export const ApiKeySchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  keyHash: z.string(),
  label: z.string().nullable(),
  description: z.string().nullable(),
  scopes: JsonValueSchema.nullable(),
  isActive: z.boolean(),
  lastUsedAt: z.coerce.date().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ApiKey = z.infer<typeof ApiKeySchema>

export default ApiKeySchema;
