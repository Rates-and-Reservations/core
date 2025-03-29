import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRequestFlowCountOrderByAggregateInputSchema: z.ZodType<Prisma.BookingRequestFlowCountOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  bookingRequestId: z.lazy(() => SortOrderSchema).optional(),
  merchantId: z.lazy(() => SortOrderSchema).optional(),
  uiTemplateId: z.lazy(() => SortOrderSchema).optional(),
  slug: z.lazy(() => SortOrderSchema).optional(),
  usageLimit: z.lazy(() => SortOrderSchema).optional(),
  usageCount: z.lazy(() => SortOrderSchema).optional(),
  webhookUrl: z.lazy(() => SortOrderSchema).optional(),
  webhookEvents: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRequestFlowCountOrderByAggregateInputSchema;
