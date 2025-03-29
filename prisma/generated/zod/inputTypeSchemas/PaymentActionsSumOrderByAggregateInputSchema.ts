import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const PaymentActionsSumOrderByAggregateInputSchema: z.ZodType<Prisma.PaymentActionsSumOrderByAggregateInput> = z.object({
  amount: z.lazy(() => SortOrderSchema).optional(),
  refundedAmount: z.lazy(() => SortOrderSchema).optional()
}).strict();

export default PaymentActionsSumOrderByAggregateInputSchema;
