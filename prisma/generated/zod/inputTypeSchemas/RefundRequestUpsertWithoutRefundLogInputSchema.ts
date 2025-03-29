import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestUpdateWithoutRefundLogInputSchema } from './RefundRequestUpdateWithoutRefundLogInputSchema';
import { RefundRequestUncheckedUpdateWithoutRefundLogInputSchema } from './RefundRequestUncheckedUpdateWithoutRefundLogInputSchema';
import { RefundRequestCreateWithoutRefundLogInputSchema } from './RefundRequestCreateWithoutRefundLogInputSchema';
import { RefundRequestUncheckedCreateWithoutRefundLogInputSchema } from './RefundRequestUncheckedCreateWithoutRefundLogInputSchema';
import { RefundRequestWhereInputSchema } from './RefundRequestWhereInputSchema';

export const RefundRequestUpsertWithoutRefundLogInputSchema: z.ZodType<Prisma.RefundRequestUpsertWithoutRefundLogInput> = z.object({
  update: z.union([ z.lazy(() => RefundRequestUpdateWithoutRefundLogInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutRefundLogInputSchema) ]),
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutRefundLogInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutRefundLogInputSchema) ]),
  where: z.lazy(() => RefundRequestWhereInputSchema).optional()
}).strict();

export default RefundRequestUpsertWithoutRefundLogInputSchema;
