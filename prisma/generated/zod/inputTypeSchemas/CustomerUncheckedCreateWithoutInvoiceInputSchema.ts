import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NotificationUncheckedCreateNestedManyWithoutCustomerInputSchema } from './NotificationUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { WaitlistEntryUncheckedCreateNestedManyWithoutCustomerInputSchema } from './WaitlistEntryUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema } from './BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { BookingUncheckedCreateNestedManyWithoutCustomerInputSchema } from './BookingUncheckedCreateNestedManyWithoutCustomerInputSchema';

export const CustomerUncheckedCreateWithoutInvoiceInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutInvoiceInput> = z.object({
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
  WaitlistEntry: z.lazy(() => WaitlistEntryUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
  Booking: z.lazy(() => BookingUncheckedCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();

export default CustomerUncheckedCreateWithoutInvoiceInputSchema;
