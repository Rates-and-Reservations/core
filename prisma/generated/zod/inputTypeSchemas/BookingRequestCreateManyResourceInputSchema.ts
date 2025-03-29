import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { BookingRequestStatusSchema } from './BookingRequestStatusSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';

export const BookingRequestCreateManyResourceInputSchema: z.ZodType<Prisma.BookingRequestCreateManyResourceInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  prefilledFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  customerId: z.string().optional().nullable(),
  templateId: z.string(),
  expiresAt: z.coerce.date().optional().nullable(),
  isActive: z.boolean().optional(),
  notes: z.string().optional().nullable(),
  status: z.lazy(() => BookingRequestStatusSchema),
  actionStatus: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]),
  finalizedSnapshot: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default BookingRequestCreateManyResourceInputSchema;
