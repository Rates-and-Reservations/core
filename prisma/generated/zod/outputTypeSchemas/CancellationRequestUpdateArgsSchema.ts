import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestIncludeSchema } from '../inputTypeSchemas/CancellationRequestIncludeSchema'
import { CancellationRequestUpdateInputSchema } from '../inputTypeSchemas/CancellationRequestUpdateInputSchema'
import { CancellationRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/CancellationRequestUncheckedUpdateInputSchema'
import { CancellationRequestWhereUniqueInputSchema } from '../inputTypeSchemas/CancellationRequestWhereUniqueInputSchema'
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
import { BookingItemArgsSchema } from "../outputTypeSchemas/BookingItemArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CancellationRequestSelectSchema: z.ZodType<Prisma.CancellationRequestSelect> = z.object({
  id: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  bookingItemId: z.boolean().optional(),
  requestedBy: z.boolean().optional(),
  reason: z.boolean().optional(),
  source: z.boolean().optional(),
  status: z.boolean().optional(),
  processedAt: z.boolean().optional(),
  approvedBy: z.boolean().optional(),
  approvedAt: z.boolean().optional(),
  declinedAt: z.boolean().optional(),
  refundAmount: z.boolean().optional(),
  notes: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
  bookingItem: z.union([z.boolean(),z.lazy(() => BookingItemArgsSchema)]).optional(),
}).strict()

export const CancellationRequestUpdateArgsSchema: z.ZodType<Prisma.CancellationRequestUpdateArgs> = z.object({
  select: CancellationRequestSelectSchema.optional(),
  include: z.lazy(() => CancellationRequestIncludeSchema).optional(),
  data: z.union([ CancellationRequestUpdateInputSchema,CancellationRequestUncheckedUpdateInputSchema ]),
  where: CancellationRequestWhereUniqueInputSchema,
}).strict() ;

export default CancellationRequestUpdateArgsSchema;
