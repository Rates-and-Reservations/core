import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingActionCreateNestedOneWithoutBookingRequestActionValueInputSchema } from './BookingActionCreateNestedOneWithoutBookingRequestActionValueInputSchema';

export const BookingRequestActionValueCreateWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestActionValueCreateWithoutBookingRequestInput> = z.object({
  id: z.string().cuid().optional(),
  value: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  completedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  bookingAction: z.lazy(() => BookingActionCreateNestedOneWithoutBookingRequestActionValueInputSchema)
}).strict();

export default BookingRequestActionValueCreateWithoutBookingRequestInputSchema;
