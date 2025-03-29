import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PaymentActionsAvgOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentActionsAvgOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional(),
  refundedAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PaymentActionsAvgOrderByAggregateInputSchema;
