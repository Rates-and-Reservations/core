import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { RateOrderByWithRelationInputSchema } from './RateOrderByWithRelationInputSchema';
import { AddOnOrderByWithRelationInputSchema } from './AddOnOrderByWithRelationInputSchema';

export const RateAddOnOrderByWithRelationInputSchema: z.ZodType<Prisma.RateAddOnOrderByWithRelationInput> = z.object({
  id: z.lazy(() => SortOrderSchema).optional(),
  rateId: z.lazy(() => SortOrderSchema).optional(),
  addOnId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  rate: z.lazy(() => RateOrderByWithRelationInputSchema).optional(),
  addOn: z.lazy(() => AddOnOrderByWithRelationInputSchema).optional()
}).strict();

export default RateAddOnOrderByWithRelationInputSchema;
