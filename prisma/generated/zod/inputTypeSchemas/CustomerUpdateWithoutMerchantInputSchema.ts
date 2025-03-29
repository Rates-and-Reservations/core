import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NotificationUpdateManyWithoutCustomerNestedInputSchema } from './NotificationUpdateManyWithoutCustomerNestedInputSchema';
import { WaitlistEntryUpdateManyWithoutCustomerNestedInputSchema } from './WaitlistEntryUpdateManyWithoutCustomerNestedInputSchema';
import { InvoiceUpdateManyWithoutCustomerNestedInputSchema } from './InvoiceUpdateManyWithoutCustomerNestedInputSchema';
import { BookingRequestUpdateManyWithoutCustomerNestedInputSchema } from './BookingRequestUpdateManyWithoutCustomerNestedInputSchema';
import { BookingUpdateManyWithoutCustomerNestedInputSchema } from './BookingUpdateManyWithoutCustomerNestedInputSchema';

export const CustomerUpdateWithoutMerchantInputSchema: z.ZodType<Prisma.CustomerUpdateWithoutMerchantInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
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
  Notification: z.lazy(() => NotificationUpdateManyWithoutCustomerNestedInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryUpdateManyWithoutCustomerNestedInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUpdateManyWithoutCustomerNestedInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUpdateManyWithoutCustomerNestedInputSchema).optional(),
  Booking: z.lazy(() => BookingUpdateManyWithoutCustomerNestedInputSchema).optional()
}).strict();

export default CustomerUpdateWithoutMerchantInputSchema;
