import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingRequestCreateNestedOneWithoutBookingRequestActionValueInputSchema } from './BookingRequestCreateNestedOneWithoutBookingRequestActionValueInputSchema';

export const BookingRequestActionValueCreateWithoutBookingActionInputSchema: z.ZodType<Prisma.BookingRequestActionValueCreateWithoutBookingActionInput> = z.object({
  id: z.string().cuid().optional(),
  value: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  completedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  bookingRequest: z.lazy(() => BookingRequestCreateNestedOneWithoutBookingRequestActionValueInputSchema)
}).strict();

export default BookingRequestActionValueCreateWithoutBookingActionInputSchema;
