import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// RESOURCE SCHEMA
/////////////////////////////////////////

export const ResourceSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  templateId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  capacity: z.number().int(),
  metadata: JsonValueSchema.nullable(),
  tags: z.string().array(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Resource = z.infer<typeof ResourceSchema>

export default ResourceSchema;
