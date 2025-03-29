import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { NotificationCreateNestedManyWithoutCustomerInputSchema } from './NotificationCreateNestedManyWithoutCustomerInputSchema';
import { WaitlistEntryCreateNestedManyWithoutCustomerInputSchema } from './WaitlistEntryCreateNestedManyWithoutCustomerInputSchema';
import { InvoiceCreateNestedManyWithoutCustomerInputSchema } from './InvoiceCreateNestedManyWithoutCustomerInputSchema';
import { BookingRequestCreateNestedManyWithoutCustomerInputSchema } from './BookingRequestCreateNestedManyWithoutCustomerInputSchema';
import { BookingCreateNestedManyWithoutCustomerInputSchema } from './BookingCreateNestedManyWithoutCustomerInputSchema';

export const CustomerCreateWithoutMerchantInputSchema: z.ZodType<Prisma.CustomerCreateWithoutMerchantInput> = z.object({
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
  Notification: z.lazy(() => NotificationCreateNestedManyWithoutCustomerInputSchema).optional(),
  WaitlistEntry: z.lazy(() => WaitlistEntryCreateNestedManyWithoutCustomerInputSchema).optional(),
  Invoice: z.lazy(() => InvoiceCreateNestedManyWithoutCustomerInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestCreateNestedManyWithoutCustomerInputSchema).optional(),
  Booking: z.lazy(() => BookingCreateNestedManyWithoutCustomerInputSchema).optional()
}).strict();

export default CustomerCreateWithoutMerchantInputSchema;
