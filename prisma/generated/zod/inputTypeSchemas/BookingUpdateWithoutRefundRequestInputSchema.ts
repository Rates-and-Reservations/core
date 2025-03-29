import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BookingStatusSchema } from './BookingStatusSchema';
import { EnumBookingStatusFieldUpdateOperationsInputSchema } from './EnumBookingStatusFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantUpdateOneRequiredWithoutBookingNestedInputSchema } from './MerchantUpdateOneRequiredWithoutBookingNestedInputSchema';
import { CustomerUpdateOneWithoutBookingNestedInputSchema } from './CustomerUpdateOneWithoutBookingNestedInputSchema';
import { BookingRequestUpdateOneWithoutBookingNestedInputSchema } from './BookingRequestUpdateOneWithoutBookingNestedInputSchema';
import { PaymentActionsUpdateManyWithoutBookingNestedInputSchema } from './PaymentActionsUpdateManyWithoutBookingNestedInputSchema';
import { NotificationUpdateManyWithoutBookingNestedInputSchema } from './NotificationUpdateManyWithoutBookingNestedInputSchema';
import { InvoiceUpdateManyWithoutBookingNestedInputSchema } from './InvoiceUpdateManyWithoutBookingNestedInputSchema';
import { BookingActivityLogUpdateManyWithoutBookingNestedInputSchema } from './BookingActivityLogUpdateManyWithoutBookingNestedInputSchema';
import { BookingItemUpdateManyWithoutBookingNestedInputSchema } from './BookingItemUpdateManyWithoutBookingNestedInputSchema';
import { BookingAddOnUpdateManyWithoutBookingNestedInputSchema } from './BookingAddOnUpdateManyWithoutBookingNestedInputSchema';
import { CancellationRequestUpdateManyWithoutBookingNestedInputSchema } from './CancellationRequestUpdateManyWithoutBookingNestedInputSchema';

export const BookingUpdateWithoutRefundRequestInputSchema: z.ZodType<Prisma.BookingUpdateWithoutRefundRequestInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => BookingStatusSchema),z.lazy(() => EnumBookingStatusFieldUpdateOperationsInputSchema) ]).optional(),
  startTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  endTime: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  notes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  internalNotes: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutBookingNestedInputSchema).optional(),
  customer: z.lazy(() => CustomerUpdateOneWithoutBookingNestedInputSchema).optional(),
  bookingRequest: z.lazy(() => BookingRequestUpdateOneWithoutBookingNestedInputSchema).optional(),
  PaymentActions: z.lazy(() => PaymentActionsUpdateManyWithoutBookingNestedInputSchema).optional(),
  Notification: z.lazy(() => NotificationUpdateManyWithoutBookingNestedInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUpdateManyWithoutBookingNestedInputSchema).optional(),
  BookingActivityLog: z.lazy(() => BookingActivityLogUpdateManyWithoutBookingNestedInputSchema).optional(),
  BookingItem: z.lazy(() => BookingItemUpdateManyWithoutBookingNestedInputSchema).optional(),
  BookingAddOn: z.lazy(() => BookingAddOnUpdateManyWithoutBookingNestedInputSchema).optional(),
  CancellationRequest: z.lazy(() => CancellationRequestUpdateManyWithoutBookingNestedInputSchema).optional()
}).strict();

export default BookingUpdateWithoutRefundRequestInputSchema;
