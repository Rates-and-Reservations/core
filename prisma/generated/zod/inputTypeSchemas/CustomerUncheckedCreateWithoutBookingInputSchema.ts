import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NotificationUncheckedCreateNestedManyWithoutCustomerInputSchema } from './NotificationUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { WaitlistEntryUncheckedCreateNestedManyWithoutCustomerInputSchema } from './WaitlistEntryUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema } from './InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema';
import { BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema } from './BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema';

export const CustomerUncheckedCreateWithoutBookingInputSchema: z.ZodType<Prisma.CustomerUncheckedCreateWithoutBookingInput> = z.object({
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
  Invoice: z.lazy(() => InvoiceUncheckedCreateNestedManyWithoutCustomerInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestUncheckedCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();

export default CustomerUncheckedCreateWithoutBookingInputSchema;
