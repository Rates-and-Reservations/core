import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// BOOKING REQUEST FLOW SCHEMA
/////////////////////////////////////////

export const BookingRequestFlowSchema = z.object({
  id: z.string().cuid(),
  bookingRequestId: z.string(),
  merchantId: z.string(),
  uiTemplateId: z.string(),
  slug: z.string(),
  usageLimit: z.number().int().nullable(),
  usageCount: z.number().int(),
  webhookUrl: z.string().nullable(),
  webhookEvents: JsonValueSchema.nullable(),
  isActive: z.boolean(),
  expiresAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type BookingRequestFlow = z.infer<typeof BookingRequestFlowSchema>

export default BookingRequestFlowSchema;
