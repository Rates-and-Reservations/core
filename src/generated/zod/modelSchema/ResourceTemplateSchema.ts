import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// RESOURCE TEMPLATE SCHEMA
/////////////////////////////////////////

/**
 * @group Inventory
 */
export const ResourceTemplateSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string().nullable(),
  name: z.string(),
  category: z.string(),
  description: z.string().nullable(),
  defaultFields: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ResourceTemplate = z.infer<typeof ResourceTemplateSchema>

export default ResourceTemplateSchema;
