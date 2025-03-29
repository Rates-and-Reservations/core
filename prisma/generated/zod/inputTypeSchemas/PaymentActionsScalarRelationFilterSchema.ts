import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';

export const PaymentActionsScalarRelationFilterSchema: z.ZodType<Prisma.PaymentActionsScalarRelationFilter> = z.object({
  is: z.lazy(() => PaymentActionsWhereInputSchema).optional(),
  isNot: z.lazy(() => PaymentActionsWhereInputSchema).optional()
}).strict();

export default PaymentActionsScalarRelationFilterSchema;
