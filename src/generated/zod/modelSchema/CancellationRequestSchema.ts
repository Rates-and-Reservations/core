import { z } from 'zod';
import { Prisma } from '@prisma/client'
import { CancellationSourceSchema } from '../inputTypeSchemas/CancellationSourceSchema'
import { CancellationStatusSchema } from '../inputTypeSchemas/CancellationStatusSchema'

/////////////////////////////////////////
// CANCELLATION REQUEST SCHEMA
/////////////////////////////////////////

/**
 * @group Booking
 */
export const CancellationRequestSchema = z.object({
  source: CancellationSourceSchema,
  currentStatus: CancellationStatusSchema,
  id: z.string().cuid(),
  bookingId: z.string(),
  bookingItemId: z.string().nullable(),
  requestedBy: z.string().nullable(),
  reason: z.string().nullable(),
  processedAt: z.coerce.date().nullable(),
  approvedBy: z.string().nullable(),
  approvedAt: z.coerce.date().nullable(),
  declinedAt: z.coerce.date().nullable(),
  refundAmount: z.instanceof(Prisma.Decimal, { message: "Field 'refundAmount' must be a Decimal. Location: ['Models', 'CancellationRequest']"}).nullable(),
  notes: z.string().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CancellationRequest = z.infer<typeof CancellationRequestSchema>

export default CancellationRequestSchema;
