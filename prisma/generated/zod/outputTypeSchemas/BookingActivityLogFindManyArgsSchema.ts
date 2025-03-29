import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogIncludeSchema } from '../inputTypeSchemas/BookingActivityLogIncludeSchema'
import { BookingActivityLogWhereInputSchema } from '../inputTypeSchemas/BookingActivityLogWhereInputSchema'
import { BookingActivityLogOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingActivityLogOrderByWithRelationInputSchema'
import { BookingActivityLogWhereUniqueInputSchema } from '../inputTypeSchemas/BookingActivityLogWhereUniqueInputSchema'
import { BookingActivityLogScalarFieldEnumSchema } from '../inputTypeSchemas/BookingActivityLogScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { BookingArgsSchema } from "../outputTypeSchemas/BookingArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingActivityLogSelectSchema: z.ZodType<Prisma.BookingActivityLogSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  bookingId: z.boolean().optional(),
  userId: z.boolean().optional(),
  systemAction: z.boolean().optional(),
  action: z.boolean().optional(),
  previousValue: z.boolean().optional(),
  newValue: z.boolean().optional(),
  description: z.boolean().optional(),
  ipAddress: z.boolean().optional(),
  userAgent: z.boolean().optional(),
  performedAt: z.boolean().optional(),
  performedBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  booking: z.union([z.boolean(),z.lazy(() => BookingArgsSchema)]).optional(),
}).strict()

export const BookingActivityLogFindManyArgsSchema: z.ZodType<Prisma.BookingActivityLogFindManyArgs> = z.object({
  select: BookingActivityLogSelectSchema.optional(),
  include: z.lazy(() => BookingActivityLogIncludeSchema).optional(),
  where: BookingActivityLogWhereInputSchema.optional(),
  orderBy: z.union([ BookingActivityLogOrderByWithRelationInputSchema.array(),BookingActivityLogOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingActivityLogWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingActivityLogScalarFieldEnumSchema,BookingActivityLogScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BookingActivityLogFindManyArgsSchema;
