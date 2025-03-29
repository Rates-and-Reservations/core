import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BookingRequestActionValueCreateManyBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestActionValueCreateManyBookingRequestInput> = z.object({
  id: z.string().cuid().optional(),
  bookingActionId: z.string(),
  value: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  completedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export default BookingRequestActionValueCreateManyBookingRequestInputSchema;
