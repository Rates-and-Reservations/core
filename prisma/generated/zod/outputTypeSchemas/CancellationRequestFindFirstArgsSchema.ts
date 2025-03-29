import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CancellationRequestIncludeSchema } from '../inputTypeSchemas/CancellationRequestIncludeSchema'
import { CancellationRequestWhereInputSchema } from '../inputTypeSchemas/CancellationRequestWhereInputSchema'
import { CancellationRequestOrderByWithRelationInputSchema } from '../inputTypeSchemas/CancellationRequestOrderByWithRelationInputSchema'
import { CancellationRequestWhereUniqueInputSchema } from '../inputTypeSchemas/CancellationRequestWhereUniqueInputSchema'
import { CancellationRequestScalarFieldEnumSchema } from '../inputTypeSchemas/CancellationRequestScalarFieldEnumSchema'
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

export const CancellationRequestFindFirstArgsSchema: z.ZodType<Prisma.CancellationRequestFindFirstArgs> = z.object({
  select: CancellationRequestSelectSchema.optional(),
  include: z.lazy(() => CancellationRequestIncludeSchema).optional(),
  where: CancellationRequestWhereInputSchema.optional(),
  orderBy: z.union([ CancellationRequestOrderByWithRelationInputSchema.array(),CancellationRequestOrderByWithRelationInputSchema ]).optional(),
  cursor: CancellationRequestWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CancellationRequestScalarFieldEnumSchema,CancellationRequestScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default CancellationRequestFindFirstArgsSchema;
