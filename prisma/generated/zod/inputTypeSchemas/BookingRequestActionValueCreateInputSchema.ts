import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingActionCreateNestedOneWithoutBookingRequestActionValueInputSchema } from './BookingActionCreateNestedOneWithoutBookingRequestActionValueInputSchema';
import { BookingRequestCreateNestedOneWithoutBookingRequestActionValueInputSchema } from './BookingRequestCreateNestedOneWithoutBookingRequestActionValueInputSchema';

export const BookingRequestActionValueCreateInputSchema: z.ZodType<Prisma.BookingRequestActionValueCreateInput> = z.object({
  id: z.string().cuid().optional(),
  value: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  completedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional(),
  bookingAction: z.lazy(() => BookingActionCreateNestedOneWithoutBookingRequestActionValueInputSchema),
  bookingRequest: z.lazy(() => BookingRequestCreateNestedOneWithoutBookingRequestActionValueInputSchema)
}).strict();

export default BookingRequestActionValueCreateInputSchema;
