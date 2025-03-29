import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BookingTemplateOrderByWithRelationInputSchema } from './BookingTemplateOrderByWithRelationInputSchema';
import { BookingRequestActionValueOrderByRelationAggregateInputSchema } from './BookingRequestActionValueOrderByRelationAggregateInputSchema';

export const BookingActionOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingActionOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingTemplateId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  type: z.lazy(() => SortOrderSchema).optional(),
  config: z.lazy(() => SortOrderSchema).optional(),
  required: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  bookingTemplate: z.lazy(() => BookingTemplateOrderByWithRelationInputSchema).optional(),
  BookingRequestActionValue: z.lazy(() => BookingRequestActionValueOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BookingActionOrderByWithRelationInputSchema;
