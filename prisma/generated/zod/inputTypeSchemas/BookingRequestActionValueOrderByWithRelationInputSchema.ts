import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookingActionOrderByWithRelationInputSchema } from './BookingActionOrderByWithRelationInputSchema';
import { BookingRequestOrderByWithRelationInputSchema } from './BookingRequestOrderByWithRelationInputSchema';

export const BookingRequestActionValueOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingRequestActionValueOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingRequestId: z.lazy(() => SortOrderSchema).optional(),
  bookingActionId: z.lazy(() => SortOrderSchema).optional(),
  value: z.lazy(() => SortOrderSchema).optional(),
  completedAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  bookingAction: z.lazy(() => BookingActionOrderByWithRelationInputSchema).optional(),
  bookingRequest: z.lazy(() => BookingRequestOrderByWithRelationInputSchema).optional()
}).strict();

export default BookingRequestActionValueOrderByWithRelationInputSchema;
