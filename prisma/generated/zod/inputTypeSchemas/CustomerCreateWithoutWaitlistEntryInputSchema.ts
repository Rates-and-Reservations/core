import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantCreateNestedOneWithoutCustomerInputSchema } from './MerchantCreateNestedOneWithoutCustomerInputSchema';
import { NotificationCreateNestedManyWithoutCustomerInputSchema } from './NotificationCreateNestedManyWithoutCustomerInputSchema';
import { InvoiceCreateNestedManyWithoutCustomerInputSchema } from './InvoiceCreateNestedManyWithoutCustomerInputSchema';
import { BookingRequestCreateNestedManyWithoutCustomerInputSchema } from './BookingRequestCreateNestedManyWithoutCustomerInputSchema';
import { BookingCreateNestedManyWithoutCustomerInputSchema } from './BookingCreateNestedManyWithoutCustomerInputSchema';

export const CustomerCreateWithoutWaitlistEntryInputSchema: z.ZodType<Prisma.CustomerCreateWithoutWaitlistEntryInput> = z.object({
  id: z.string().cuid().optional(),
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
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutCustomerInputSchema),
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutCustomerInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceCreateNestedManyWithoutCustomerInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestCreateNestedManyWithoutCustomerInputSchema).optional(),
  Booking: z.lazy(() => BookingCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();

export default CustomerCreateWithoutWaitlistEntryInputSchema;
