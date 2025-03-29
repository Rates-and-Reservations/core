import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NotificationUncheckedUpdateManyWithoutCustomerNestedInputSchema } from './NotificationUncheckedUpdateManyWithoutCustomerNestedInputSchema';
import { WaitlistEntryUncheckedUpdateManyWithoutCustomerNestedInputSchema } from './WaitlistEntryUncheckedUpdateManyWithoutCustomerNestedInputSchema';
import { InvoiceUncheckedUpdateManyWithoutCustomerNestedInputSchema } from './InvoiceUncheckedUpdateManyWithoutCustomerNestedInputSchema';
import { BookingRequestUncheckedUpdateManyWithoutCustomerNestedInputSchema } from './BookingRequestUncheckedUpdateManyWithoutCustomerNestedInputSchema';
import { BookingUncheckedUpdateManyWithoutCustomerNestedInputSchema } from './BookingUncheckedUpdateManyWithoutCustomerNestedInputSchema';

export const CustomerUncheckedUpdateInputSchema: z.ZodType<Prisma.CustomerUncheckedUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  merchantId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  phone: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  city: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  postcode: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  country: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  Notification: z.lazy(() => NotificationUncheckedUpdateManyWithoutCustomerNestedInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryUncheckedUpdateManyWithoutCustomerNestedInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedUpdateManyWithoutCustomerNestedInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedUpdateManyWithoutCustomerNestedInputSchema).optional(),
  Booking: z.lazy(() => BookingUncheckedUpdateManyWithoutCustomerNestedInputSchema).optional()
}).strict();

export default CustomerUncheckedUpdateInputSchema;
