import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { CancellationStatusSchema } from '../inputTypeSchemas/CancellationStatusSchema'

/////////////////////////////////////////
// CANCELLATION REQUEST TRANSITION SCHEMA
/////////////////////////////////////////

/**
 * CancellationRequestTransition: Represents a change in the status of a cancellation request
 * @group Booking
 */
export const CancellationRequestTransitionSchema = z.object({
  fromStatus: CancellationStatusSchema,
  toStatus: CancellationStatusSchema,
  id: z.string().cuid(),
  cancellationRequestId: z.string(),
  reason: z.string().nullable(),
  notes: z.string().nullable(),
  metadata: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CancellationRequestTransition = z.infer<typeof CancellationRequestTransitionSchema>

export default CancellationRequestTransitionSchema;
