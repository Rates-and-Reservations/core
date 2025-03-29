import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BookingRateSnapshotMinOrderByAggregateInputSchema: z.ZodType<Prisma.BookingRateSnapshotMinOrderByAggregateInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rateId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  description: z.lazy(() => SortOrderSchema).optional(),
  price: z.lazy(() => SortOrderSchema).optional(),
  currency: z.lazy(() => SortOrderSchema).optional(),
  durationType: z.lazy(() => SortOrderSchema).optional(),
  isDefault: z.lazy(() => SortOrderSchema).optional(),
  isActive: z.lazy(() => SortOrderSchema).optional(),
  bookingStartDate: z.lazy(() => SortOrderSchema).optional(),
  bookingEndDate: z.lazy(() => SortOrderSchema).optional(),
  usageStartDate: z.lazy(() => SortOrderSchema).optional(),
  usageEndDate: z.lazy(() => SortOrderSchema).optional(),
  taxType: z.lazy(() => SortOrderSchema).optional(),
  taxAmount: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default BookingRateSnapshotMinOrderByAggregateInputSchema;
