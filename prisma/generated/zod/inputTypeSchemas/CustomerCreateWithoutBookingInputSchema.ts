import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantCreateNestedOneWithoutCustomerInputSchema } from './MerchantCreateNestedOneWithoutCustomerInputSchema';
import { NotificationCreateNestedManyWithoutCustomerInputSchema } from './NotificationCreateNestedManyWithoutCustomerInputSchema';
import { WaitlistEntryCreateNestedManyWithoutCustomerInputSchema } from './WaitlistEntryCreateNestedManyWithoutCustomerInputSchema';
import { InvoiceCreateNestedManyWithoutCustomerInputSchema } from './InvoiceCreateNestedManyWithoutCustomerInputSchema';
import { BookingRequestCreateNestedManyWithoutCustomerInputSchema } from './BookingRequestCreateNestedManyWithoutCustomerInputSchema';

export const CustomerCreateWithoutBookingInputSchema: z.ZodType<Prisma.CustomerCreateWithoutBookingInput> = z.object({
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
  WaitlistEntry: z.lazy(() => WaitlistEntryCreateNestedManyWithoutCustomerInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceCreateNestedManyWithoutCustomerInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();

export default CustomerCreateWithoutBookingInputSchema;
