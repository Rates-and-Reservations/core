import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereInputSchema } from './BookingWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumBookingStatusFilterSchema } from './EnumBookingStatusFilterSchema';
import { BookingStatusSchema } from './BookingStatusSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { JsonNullableFilterSchema } from './JsonNullableFilterSchema';
import { MerchantScalarRelationFilterSchema } from './MerchantScalarRelationFilterSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { CustomerNullableScalarRelationFilterSchema } from './CustomerNullableScalarRelationFilterSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { BookingRequestNullableScalarRelationFilterSchema } from './BookingRequestNullableScalarRelationFilterSchema';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';
import { PaymentActionsListRelationFilterSchema } from './PaymentActionsListRelationFilterSchema';
import { NotificationListRelationFilterSchema } from './NotificationListRelationFilterSchema';
import { InvoiceListRelationFilterSchema } from './InvoiceListRelationFilterSchema';
import { BookingActivityLogListRelationFilterSchema } from './BookingActivityLogListRelationFilterSchema';
import { RefundRequestListRelationFilterSchema } from './RefundRequestListRelationFilterSchema';
import { BookingItemListRelationFilterSchema } from './BookingItemListRelationFilterSchema';
import { BookingAddOnListRelationFilterSchema } from './BookingAddOnListRelationFilterSchema';
import { CancellationRequestListRelationFilterSchema } from './CancellationRequestListRelationFilterSchema';

export const BookingWhereUniqueInputSchema: z.ZodType<Prisma.BookingWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => BookingWhereInputSchema),z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BookingWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BookingWhereInputSchema),z.lazy(() => BookingWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  customerId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  bookingRequestId: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumBookingStatusFilterSchema),z.lazy(() => BookingStatusSchema) ]).optional(),
  startTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  endTime: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  notes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  internalNotes: z.union([ z.lazy(() => StringNullableFilterSchema),z.string() ]).optional().nullable(),
  metadata: z.lazy(() => JsonNullableFilterSchema).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  merchant: z.union([ z.lazy(() => MerchantScalarRelationFilterSchema),z.lazy(() => MerchantWhereInputSchema) ]).optional(),
  customer: z.union([ z.lazy(() => CustomerNullableScalarRelationFilterSchema),z.lazy(() => CustomerWhereInputSchema) ]).optional().nullable(),
  bookingRequest: z.union([ z.lazy(() => BookingRequestNullableScalarRelationFilterSchema),z.lazy(() => BookingRequestWhereInputSchema) ]).optional().nullable(),
  PaymentActions: z.lazy(() => PaymentActionsListRelationFilterSchema).optional(),
  Notification: z.lazy(() => NotificationListRelationFilterSchema).optional(),
  Invoice: z.lazy(() => InvoiceListRelationFilterSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogListRelationFilterSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestListRelationFilterSchema).optional(),
  BookingItem: z.lazy(() => BookingItemListRelationFilterSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnListRelationFilterSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestListRelationFilterSchema).optional()
}).strict());

export default BookingWhereUniqueInputSchema;
