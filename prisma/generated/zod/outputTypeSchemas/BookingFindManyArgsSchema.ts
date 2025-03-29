import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingIncludeSchema } from '../inputTypeSchemas/BookingIncludeSchema'
import { BookingWhereInputSchema } from '../inputTypeSchemas/BookingWhereInputSchema'
import { BookingOrderByWithRelationInputSchema } from '../inputTypeSchemas/BookingOrderByWithRelationInputSchema'
import { BookingWhereUniqueInputSchema } from '../inputTypeSchemas/BookingWhereUniqueInputSchema'
import { BookingScalarFieldEnumSchema } from '../inputTypeSchemas/BookingScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { CustomerArgsSchema } from "../outputTypeSchemas/CustomerArgsSchema"
import { BookingRequestArgsSchema } from "../outputTypeSchemas/BookingRequestArgsSchema"
import { PaymentActionsFindManyArgsSchema } from "../outputTypeSchemas/PaymentActionsFindManyArgsSchema"
import { NotificationFindManyArgsSchema } from "../outputTypeSchemas/NotificationFindManyArgsSchema"
import { InvoiceFindManyArgsSchema } from "../outputTypeSchemas/InvoiceFindManyArgsSchema"
import { BookingActivityLogFindManyArgsSchema } from "../outputTypeSchemas/BookingActivityLogFindManyArgsSchema"
import { RefundRequestFindManyArgsSchema } from "../outputTypeSchemas/RefundRequestFindManyArgsSchema"
import { BookingItemFindManyArgsSchema } from "../outputTypeSchemas/BookingItemFindManyArgsSchema"
import { BookingAddOnFindManyArgsSchema } from "../outputTypeSchemas/BookingAddOnFindManyArgsSchema"
import { CancellationRequestFindManyArgsSchema } from "../outputTypeSchemas/CancellationRequestFindManyArgsSchema"
import { BookingCountOutputTypeArgsSchema } from "../outputTypeSchemas/BookingCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BookingSelectSchema: z.ZodType<Prisma.BookingSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  customerId: z.boolean().optional(),
  bookingRequestId: z.boolean().optional(),
  status: z.boolean().optional(),
  startTime: z.boolean().optional(),
  endTime: z.boolean().optional(),
  notes: z.boolean().optional(),
  internalNotes: z.boolean().optional(),
  metadata: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  customer: z.union([z.boolean(),z.lazy(() => CustomerArgsSchema)]).optional(),
  bookingRequest: z.union([z.boolean(),z.lazy(() => BookingRequestArgsSchema)]).optional(),
  PaymentActions: z.union([z.boolean(),z.lazy(() => PaymentActionsFindManyArgsSchema)]).optional(),
  Notification: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  Invoice: z.union([z.boolean(),z.lazy(() => InvoiceFindManyArgsSchema)]).optional(),
  BookingActivityLog: z.union([z.boolean(),z.lazy(() => BookingActivityLogFindManyArgsSchema)]).optional(),
  RefundRequest: z.union([z.boolean(),z.lazy(() => RefundRequestFindManyArgsSchema)]).optional(),
  BookingItem: z.union([z.boolean(),z.lazy(() => BookingItemFindManyArgsSchema)]).optional(),
  BookingAddOn: z.union([z.boolean(),z.lazy(() => BookingAddOnFindManyArgsSchema)]).optional(),
  CancellationRequest: z.union([z.boolean(),z.lazy(() => CancellationRequestFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BookingCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BookingFindManyArgsSchema: z.ZodType<Prisma.BookingFindManyArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: z.lazy(() => BookingIncludeSchema).optional(),
  where: BookingWhereInputSchema.optional(),
  orderBy: z.union([ BookingOrderByWithRelationInputSchema.array(),BookingOrderByWithRelationInputSchema ]).optional(),
  cursor: BookingWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BookingScalarFieldEnumSchema,BookingScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default BookingFindManyArgsSchema;
