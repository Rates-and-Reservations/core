import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingStatusSchema } from './BookingStatusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { PaymentActionsUncheckedCreateNestedManyWithoutBookingInputSchema } from './PaymentActionsUncheckedCreateNestedManyWithoutBookingInputSchema';
import { NotificationUncheckedCreateNestedManyWithoutBookingInputSchema } from './NotificationUncheckedCreateNestedManyWithoutBookingInputSchema';
import { InvoiceUncheckedCreateNestedManyWithoutBookingInputSchema } from './InvoiceUncheckedCreateNestedManyWithoutBookingInputSchema';
import { BookingActivityLogUncheckedCreateNestedManyWithoutBookingInputSchema } from './BookingActivityLogUncheckedCreateNestedManyWithoutBookingInputSchema';
import { RefundRequestUncheckedCreateNestedManyWithoutBookingInputSchema } from './RefundRequestUncheckedCreateNestedManyWithoutBookingInputSchema';
import { BookingItemUncheckedCreateNestedManyWithoutBookingInputSchema } from './BookingItemUncheckedCreateNestedManyWithoutBookingInputSchema';
import { BookingAddOnUncheckedCreateNestedManyWithoutBookingInputSchema } from './BookingAddOnUncheckedCreateNestedManyWithoutBookingInputSchema';
import { CancellationRequestUncheckedCreateNestedManyWithoutBookingInputSchema } from './CancellationRequestUncheckedCreateNestedManyWithoutBookingInputSchema';

export const BookingUncheckedCreateInputSchema: z.ZodType<Prisma.BookingUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  customerId: z.string().optional().nullable(),
  bookingRequestId: z.string().optional().nullable(),
  status: z.lazy(() => BookingStatusSchema).optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  notes: z.string().optional().nullable(),
  internalNotes: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  PaymentActions: z.lazy(() => PaymentActionsUncheckedCreateNestedManyWithoutBookingInputSchema).optional(),
  Notification: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutBookingInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutBookingInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogUncheckedCreateNestedManyWithoutBookingInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestUncheckedCreateNestedManyWithoutBookingInputSchema).optional(),
  BookingItem: z.lazy(() => BookingItemUncheckedCreateNestedManyWithoutBookingInputSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnUncheckedCreateNestedManyWithoutBookingInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestUncheckedCreateNestedManyWithoutBookingInputSchema).optional()
}).strict();

export default BookingUncheckedCreateInputSchema;
