import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';

export const PaymentActionsListRelationFilterSchema: z.ZodType<Prisma.PaymentActionsListRelationFilter> = z.object({
  every: z.lazy(() => PaymentActionsWhereInputSchema).optional(),
  some: z.lazy(() => PaymentActionsWhereInputSchema).optional(),
  none: z.lazy(() => PaymentActionsWhereInputSchema).optional()
}).strict();

export default PaymentActionsListRelationFilterSchema;
