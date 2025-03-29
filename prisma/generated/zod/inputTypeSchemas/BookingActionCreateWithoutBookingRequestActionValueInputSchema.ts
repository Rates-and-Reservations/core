import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ActionTypeSchema } from './ActionTypeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingTemplateCreateNestedOneWithoutActionsInputSchema } from './BookingTemplateCreateNestedOneWithoutActionsInputSchema';

export const BookingActionCreateWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingActionCreateWithoutBookingRequestActionValueInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  type: z.lazy(() => ActionTypeSchema),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  required: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bookingTemplate: z.lazy(() => BookingTemplateCreateNestedOneWithoutActionsInputSchema)
}).strict();

export default BookingActionCreateWithoutBookingRequestActionValueInputSchema;
