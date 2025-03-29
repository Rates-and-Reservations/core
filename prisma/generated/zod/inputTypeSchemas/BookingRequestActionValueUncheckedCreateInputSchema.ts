import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BookingRequestActionValueUncheckedCreateInputSchema: z.ZodType<Prisma.BookingRequestActionValueUncheckedCreateInput> = z.object({
  id: z.string().cuid().optional(),
  bookingRequestId: z.string(),
  bookingActionId: z.string(),
  value: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  completedAt: z.coerce.date().optional(),
  createdAt: z.coerce.date().optional()
}).strict();

export default BookingRequestActionValueUncheckedCreateInputSchema;
