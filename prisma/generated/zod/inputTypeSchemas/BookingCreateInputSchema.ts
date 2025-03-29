import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingStatusSchema } from './BookingStatusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantCreateNestedOneWithoutBookingInputSchema } from './MerchantCreateNestedOneWithoutBookingInputSchema';
import { CustomerCreateNestedOneWithoutBookingInputSchema } from './CustomerCreateNestedOneWithoutBookingInputSchema';
import { BookingRequestCreateNestedOneWithoutBookingInputSchema } from './BookingRequestCreateNestedOneWithoutBookingInputSchema';
import { PaymentActionsCreateNestedManyWithoutBookingInputSchema } from './PaymentActionsCreateNestedManyWithoutBookingInputSchema';
import { NotificationCreateNestedManyWithoutBookingInputSchema } from './NotificationCreateNestedManyWithoutBookingInputSchema';
import { InvoiceCreateNestedManyWithoutBookingInputSchema } from './InvoiceCreateNestedManyWithoutBookingInputSchema';
import { BookingActivityLogCreateNestedManyWithoutBookingInputSchema } from './BookingActivityLogCreateNestedManyWithoutBookingInputSchema';
import { RefundRequestCreateNestedManyWithoutBookingInputSchema } from './RefundRequestCreateNestedManyWithoutBookingInputSchema';
import { BookingItemCreateNestedManyWithoutBookingInputSchema } from './BookingItemCreateNestedManyWithoutBookingInputSchema';
import { BookingAddOnCreateNestedManyWithoutBookingInputSchema } from './BookingAddOnCreateNestedManyWithoutBookingInputSchema';
import { CancellationRequestCreateNestedManyWithoutBookingInputSchema } from './CancellationRequestCreateNestedManyWithoutBookingInputSchema';

export const BookingCreateInputSchema: z.ZodType<Prisma.BookingCreateInput> = z.object({
  id: z.string().cuid().optional(),
  status: z.lazy(() => BookingStatusSchema).optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  notes: z.string().optional().nullable(),
  internalNotes: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutBookingInputSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutBookingInputSchema).optional(),
  bookingRequest: z.lazy(() => BookingRequestCreateNestedOneWithoutBookingInputSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsCreateNestedManyWithoutBookingInputSchema).optional(),
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutBookingInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceCreateNestedManyWithoutBookingInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogCreateNestedManyWithoutBookingInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestCreateNestedManyWithoutBookingInputSchema).optional(),
  BookingItem: z.lazy(() => BookingItemCreateNestedManyWithoutBookingInputSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnCreateNestedManyWithoutBookingInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestCreateNestedManyWithoutBookingInputSchema).optional()
}).strict();

export default BookingCreateInputSchema;
