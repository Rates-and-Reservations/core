import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingActivityLogIncludeSchema } from '../inputTypeSchemas/BookingActivityLogIncludeSchema'
import { BookingActivityLogWhereUniqueInputSchema } from '../inputTypeSchemas/BookingActivityLogWhereUniqueInputSchema'
import { BookingActivityLogCreateInputSchema } from '../inputTypeSchemas/BookingActivityLogCreateInputSchema'
import { BookingActivityLogUncheckedCreateInputSchema } from '../inputTypeSchemas/BookingActivityLogUncheckedCreateInputSchema'
import { BookingActivityLogUpdateInputSchema } from '../inputTypeSchemas/BookingActivityLogUpdateInputSchema'
import { BookingActivityLogUncheckedUpdateInputSchema } from '../inputTypeSchemas/BookingActivityLogUncheckedUpdateInputSchema'
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

export const BookingActivityLogUpsertArgsSchema: z.ZodType<Prisma.BookingActivityLogUpsertArgs> = z.object({
  select: BookingActivityLogSelectSchema.optional(),
  include: z.lazy(() => BookingActivityLogIncludeSchema).optional(),
  where: BookingActivityLogWhereUniqueInputSchema,
  create: z.union([ BookingActivityLogCreateInputSchema,BookingActivityLogUncheckedCreateInputSchema ]),
  update: z.union([ BookingActivityLogUpdateInputSchema,BookingActivityLogUncheckedUpdateInputSchema ]),
}).strict() ;

export default BookingActivityLogUpsertArgsSchema;
