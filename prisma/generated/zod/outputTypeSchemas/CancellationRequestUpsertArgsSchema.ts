import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestIncludeSchema } from '../inputTypeSchemas/CancellationRequestIncludeSchema'
import { CancellationRequestWhereUniqueInputSchema } from '../inputTypeSchemas/CancellationRequestWhereUniqueInputSchema'
import { CancellationRequestCreateInputSchema } from '../inputTypeSchemas/CancellationRequestCreateInputSchema'
import { CancellationRequestUncheckedCreateInputSchema } from '../inputTypeSchemas/CancellationRequestUncheckedCreateInputSchema'
import { CancellationRequestUpdateInputSchema } from '../inputTypeSchemas/CancellationRequestUpdateInputSchema'
import { CancellationRequestUncheckedUpdateInputSchema } from '../inputTypeSchemas/CancellationRequestUncheckedUpdateInputSchema'
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

export const CancellationRequestUpsertArgsSchema: z.ZodType<Prisma.CancellationRequestUpsertArgs> = z.object({
  select: CancellationRequestSelectSchema.optional(),
  include: z.lazy(() => CancellationRequestIncludeSchema).optional(),
  where: CancellationRequestWhereUniqueInputSchema,
  create: z.union([ CancellationRequestCreateInputSchema,CancellationRequestUncheckedCreateInputSchema ]),
  update: z.union([ CancellationRequestUpdateInputSchema,CancellationRequestUncheckedUpdateInputSchema ]),
}).strict() ;

export default CancellationRequestUpsertArgsSchema;
