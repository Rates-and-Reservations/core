import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ActionTypeSchema } from './ActionTypeSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingActionUncheckedCreateWithoutBookingRequestActionValueInput> = z.object({
  id: z.string().cuid().optional(),
  bookingTemplateId: z.string(),
  name: z.string(),
  type: z.lazy(() => ActionTypeSchema),
  config: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  required: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema;
