import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ActionTypeSchema } from './ActionTypeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingRequestActionValueCreateNestedManyWithoutBookingActionInputSchema } from './BookingRequestActionValueCreateNestedManyWithoutBookingActionInputSchema';

export const BookingActionCreateWithoutBookingTemplateInputSchema: z.ZodType<Prisma.BookingActionCreateWithoutBookingTemplateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  type: z.lazy(() => ActionTypeSchema),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  required: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueCreateNestedManyWithoutBookingActionInputSchema).optional()
}).strict();

export default BookingActionCreateWithoutBookingTemplateInputSchema;
