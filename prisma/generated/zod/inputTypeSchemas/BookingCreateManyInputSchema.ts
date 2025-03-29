import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingStatusSchema } from './BookingStatusSchema';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const BookingCreateManyInputSchema: z.ZodType<Prisma.BookingCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  customerId: z.string().optional().nullable(),
  bookingRequestId: z.string().optional().nullable(),
  status: z.lazy(() => BookingStatusSchema).optional(),
  startTime: z.coerce.date(),
  endTime: z.coerce.date(),
  notes: z.string().optional().nullable(),
  internalNotes: z.string().optional().nullable(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BookingCreateManyInputSchema;
