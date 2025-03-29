import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NotificationUncheckedCreateNestedManyWithoutCustomerInputSchema } from './NotificationUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema } from './InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema } from './BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { BookingUncheckedCreateNestedManyWithoutCustomerInputSchema } from './BookingUncheckedCreateNestedManyWithoutCustomerInputSchema';

export const CustomerUncheckedCreateWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutWaitlistEntryInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  name: z.string(),
  email: z.string(),
  phone: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  city: z.string().optional().nullable(),
  postcode: z.string().optional().nullable(),
  country: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Notification: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
  Booking: z.lazy(() => BookingUncheckedCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();

export default CustomerUncheckedCreateWithoutWaitlistEntryInputSchema;
