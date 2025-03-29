import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ActionTypeSchema } from './ActionTypeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingTemplateCreateNestedOneWithoutActionsInputSchema } from './BookingTemplateCreateNestedOneWithoutActionsInputSchema';
import { BookingRequestActionValueCreateNestedManyWithoutBookingActionInputSchema } from './BookingRequestActionValueCreateNestedManyWithoutBookingActionInputSchema';

export const BookingActionCreateInputSchema: z.ZodType<Prisma.BookingActionCreateInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  type: z.lazy(() => ActionTypeSchema),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  required: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  bookingTemplate: z.lazy(() => BookingTemplateCreateNestedOneWithoutActionsInputSchema),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueCreateNestedManyWithoutBookingActionInputSchema).optional()
}).strict();

export default BookingActionCreateInputSchema;
