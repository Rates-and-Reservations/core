import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { MerchantOrderByWithRelationInputSchema } from './MerchantOrderByWithRelationInputSchema';
import { BookingActionOrderByRelationAggregateInputSchema } from './BookingActionOrderByRelationAggregateInputSchema';
import { BookingRequestOrderByRelationAggregateInputSchema } from './BookingRequestOrderByRelationAggregateInputSchema';

export const BookingTemplateOrderByWithRelationInputSchema: z.ZodType<Prisma.BookingTemplateOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema),z.lazy(() => SortOrderInputSchema) ]).optional(),
  selectionMode: z.lazy(() => SortOrderSchema).optional(),
  config: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  merchant: z.lazy(() => MerchantOrderByWithRelationInputSchema).optional(),
  actions: z.lazy(() => BookingActionOrderByRelationAggregateInputSchema).optional(),
  BookingRequest: z.lazy(() => BookingRequestOrderByRelationAggregateInputSchema).optional()
}).strict();

export default BookingTemplateOrderByWithRelationInputSchema;
