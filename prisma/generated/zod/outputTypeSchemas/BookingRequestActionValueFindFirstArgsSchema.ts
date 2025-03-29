import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestActionValueIncludeSchema } from '../inputTypeSchemas/BookingRequestActionValueIncludeSchema'
import { BookingRequestActionValueWhereInputSchema } from '../inputTypeSchemas/BookingRequestActionValueWhereInputSchema'
import { BookingRequestActionValueOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingRequestActionValueOrderByWithRelationInputSchema'
import { BookingRequestActionValueWhereUniqueInputSchema } from '../inputTypeSchemas/BookingRequestActionValueWhereUniqueInputSchema'
import { BookingRequestActionValueScalarFieldEnumSchema } from '../inputTypeSchemas/BookingRequestActionValueScalarFieldEnumSchema'
import { BookingActionArgsSchema } from "../outputTypeSchemas/BookingActionArgsSchema"
import { BookingRequestArgsSchema } from "../outputTypeSchemas/BookingRequestArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingRequestActionValueSelectSchema: z.ZodType<Prisma.BookingRequestActionValueSelect> = z.object({
  id: z.boolean().optional(),
  bookingRequestId: z.boolean().optional(),
  bookingActionId: z.boolean().optional(),
  value: z.boolean().optional(),
  completedAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  bookingAction: z.union([z.boolean(),z.lazy(() => BookingActionArgsSchema)]).optional(),
  bookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestArgsSchema)]).optional(),
}).strict()

export const BookingRequestActionValueFindFirstArgsSchema: z.ZodType<Prisma.BookingRequestActionValueFindFirstArgs> = z.object({
  select: BookingRequestActionValueSelectSchema.optional(),
  include: z.lazy(() => BookingRequestActionValueIncludeSchema).optional(),
  where: BookingRequestActionValueWhereInputSchema.optional(),
  orderBy: z.union([ BookingRequestActionValueOrderByWithRelationInputSchema.array(),BookingRequestActionValueOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingRequestActionValueWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingRequestActionValueScalarFieldEnumSchema,BookingRequestActionValueScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BookingRequestActionValueFindFirstArgsSchema;
