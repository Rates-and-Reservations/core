import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// RESOURCE SCHEMA
/////////////////////////////////////////

/**
 * Resource: Represents a physical or virtual resource that can be booked
 * @group Inventory
 */
export const ResourceSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  description: z.string().nullable(),
  capacity: z.number().int(),
  minDuration: z.number().int(),
  maxDuration: z.number().int(),
  bufferTime: z.number().int(),
  serviceLocationId: z.string().nullable(),
  location: JsonValueSchema.nullable(),
  serviceArea: JsonValueSchema.nullable(),
  isVirtual: z.boolean(),
  metadata: JsonValueSchema.nullable(),
  tags: z.string().array(),
  isActive: z.boolean(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  templateId: z.string().nullable(),
})

export type Resource = z.infer<typeof ResourceSchema>

export default ResourceSchema;
