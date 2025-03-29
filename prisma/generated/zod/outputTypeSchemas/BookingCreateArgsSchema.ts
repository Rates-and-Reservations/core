import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingIncludeSchema } from '../inputTypeSchemas/BookingIncludeSchema'
import { BookingCreateInputSchema } from '../inputTypeSchemas/BookingCreateInputSchema'
import { BookingUncheckedCreateInputSchema } from '../inputTypeSchemas/BookingUncheckedCreateInputSchema'
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

export const BookingCreateArgsSchema: z.ZodType<Prisma.BookingCreateArgs> = z.object({
  select: BookingSelectSchema.optional(),
  include: z.lazy(() => BookingIncludeSchema).optional(),
  data: z.union([ BookingCreateInputSchema,BookingUncheckedCreateInputSchema ]),
}).strict() ;

export default BookingCreateArgsSchema;
