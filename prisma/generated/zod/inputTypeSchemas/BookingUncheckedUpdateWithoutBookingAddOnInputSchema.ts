import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BookingStatusSchema } from './BookingStatusSchema';
import { EnumBookingStatusFieldUpdateOperationsInputSchema } from './EnumBookingStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { PaymentActionsUncheckedUpdateManyWithoutBookingNestedInputSchema } from './PaymentActionsUncheckedUpdateManyWithoutBookingNestedInputSchema';
import { NotificationUncheckedUpdateManyWithoutBookingNestedInputSchema } from './NotificationUncheckedUpdateManyWithoutBookingNestedInputSchema';
import { InvoiceUncheckedUpdateManyWithoutBookingNestedInputSchema } from './InvoiceUncheckedUpdateManyWithoutBookingNestedInputSchema';
import { BookingActivityLogUncheckedUpdateManyWithoutBookingNestedInputSchema } from './BookingActivityLogUncheckedUpdateManyWithoutBookingNestedInputSchema';
import { RefundRequestUncheckedUpdateManyWithoutBookingNestedInputSchema } from './RefundRequestUncheckedUpdateManyWithoutBookingNestedInputSchema';
import { BookingItemUncheckedUpdateManyWithoutBookingNestedInputSchema } from './BookingItemUncheckedUpdateManyWithoutBookingNestedInputSchema';
import { CancellationRequestUncheckedUpdateManyWithoutBookingNestedInputSchema } from './CancellationRequestUncheckedUpdateManyWithoutBookingNestedInputSchema';

export const BookingUncheckedUpdateWithoutBookingAddOnInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateWithoutBookingAddOnInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  merchantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  customerId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bookingRequestId: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => BookingStatusSchema),z.lazy(() => EnumBookingStatusFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  internalNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  PaymentActions: z.lazy(() => PaymentActionsUncheckedUpdateManyWithoutBookingNestedInputSchema).optional(),
  Notification: z.lazy(() => NotificationUncheckedUpdateManyWithoutBookingNestedInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedUpdateManyWithoutBookingNestedInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogUncheckedUpdateManyWithoutBookingNestedInputSchema).optional(),
  RefundRequest: z.lazy(() => RefundRequestUncheckedUpdateManyWithoutBookingNestedInputSchema).optional(),
  BookingItem: z.lazy(() => BookingItemUncheckedUpdateManyWithoutBookingNestedInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestUncheckedUpdateManyWithoutBookingNestedInputSchema).optional()
}).strict();

export default BookingUncheckedUpdateWithoutBookingAddOnInputSchema;
