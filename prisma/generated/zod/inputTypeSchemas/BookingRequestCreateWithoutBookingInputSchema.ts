import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { MerchantCreateNestedOneWithoutBookingRequestInputSchema } from './MerchantCreateNestedOneWithoutBookingRequestInputSchema';
import { CustomerCreateNestedOneWithoutBookingRequestInputSchema } from './CustomerCreateNestedOneWithoutBookingRequestInputSchema';
import { ResourceCreateNestedOneWithoutBookingRequestInputSchema } from './ResourceCreateNestedOneWithoutBookingRequestInputSchema';
import { BookingTemplateCreateNestedOneWithoutBookingRequestInputSchema } from './BookingTemplateCreateNestedOneWithoutBookingRequestInputSchema';
import { BookingRequestFlowCreateNestedManyWithoutBookingRequestInputSchema } from './BookingRequestFlowCreateNestedManyWithoutBookingRequestInputSchema';
import { BookingRequestActionValueCreateNestedManyWithoutBookingRequestInputSchema } from './BookingRequestActionValueCreateNestedManyWithoutBookingRequestInputSchema';

export const BookingRequestCreateWithoutBookingInputSchema: z.ZodType<Prisma.BookingRequestCreateWithoutBookingInput> = z.object({
  id: z.string().cuid().optional(),
  prefilledFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  expiresAt: z.coerce.date().optional().nullable(),
  isActive: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  status: z.lazy(() => BookingRequestStatusSchema),
  actionStatus: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  finalizedSnapshot: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutBookingRequestInputSchema),
  customer: z.lazy(() => CustomerCreateNestedOneWithoutBookingRequestInputSchema).optional(),
  resource: z.lazy(() => ResourceCreateNestedOneWithoutBookingRequestInputSchema).optional(),
  template: z.lazy(() => BookingTemplateCreateNestedOneWithoutBookingRequestInputSchema),
  BookingRequestFlow: z.lazy(() => BookingRequestFlowCreateNestedManyWithoutBookingRequestInputSchema).optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueCreateNestedManyWithoutBookingRequestInputSchema).optional()
}).strict();

export default BookingRequestCreateWithoutBookingInputSchema;
