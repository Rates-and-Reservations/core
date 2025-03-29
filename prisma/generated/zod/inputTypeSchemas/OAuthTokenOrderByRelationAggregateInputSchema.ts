import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const OAuthTokenOrderByRelationAggregateInputSchema: z.ZodType<Prisma.OAuthTokenOrderByRelationAggregateInput> = z.object({
  _count: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default OAuthTokenOrderByRelationAggregateInputSchema;
