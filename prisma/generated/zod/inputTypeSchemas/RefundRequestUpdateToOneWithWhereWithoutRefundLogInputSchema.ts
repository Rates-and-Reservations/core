import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereInputSchema } from './RefundRequestWhereInputSchema';
import { RefundRequestUpdateWithoutRefundLogInputSchema } from './RefundRequestUpdateWithoutRefundLogInputSchema';
import { RefundRequestUncheckedUpdateWithoutRefundLogInputSchema } from './RefundRequestUncheckedUpdateWithoutRefundLogInputSchema';

export const RefundRequestUpdateToOneWithWhereWithoutRefundLogInputSchema: z.ZodType<Prisma.RefundRequestUpdateToOneWithWhereWithoutRefundLogInput> = z.object({
  where: z.lazy(() => RefundRequestWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => RefundRequestUpdateWithoutRefundLogInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutRefundLogInputSchema) ]),
}).strict();

export default RefundRequestUpdateToOneWithWhereWithoutRefundLogInputSchema;
