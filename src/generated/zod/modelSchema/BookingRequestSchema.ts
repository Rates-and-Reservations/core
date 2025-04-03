import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { BookingRequestStatusSchema } from '../inputTypeSchemas/BookingRequestStatusSchema'

/////////////////////////////////////////
// BOOKING REQUEST SCHEMA
/////////////////////////////////////////

/**
 * @group BookingSetup
 */
export const BookingRequestSchema = z.object({
  status: BookingRequestStatusSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  prefilledFields: JsonValueSchema.nullable(),
  customerId: z.string().nullable(),
  resourceId: z.string().nullable(),
  templateId: z.string(),
  expiresAt: z.coerce.date().nullable(),
  isActive: z.boolean(),
  notes: z.string().nullable(),
  actionStatus: JsonValueSchema,
  finalizedSnapshot: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingRequest = z.infer<typeof BookingRequestSchema>

export default BookingRequestSchema;
