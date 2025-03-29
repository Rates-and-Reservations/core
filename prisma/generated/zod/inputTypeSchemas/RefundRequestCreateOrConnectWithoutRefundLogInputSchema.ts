import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestCreateWithoutRefundLogInputSchema } from './RefundRequestCreateWithoutRefundLogInputSchema';
import { RefundRequestUncheckedCreateWithoutRefundLogInputSchema } from './RefundRequestUncheckedCreateWithoutRefundLogInputSchema';

export const RefundRequestCreateOrConnectWithoutRefundLogInputSchema: z.ZodType<Prisma.RefundRequestCreateOrConnectWithoutRefundLogInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutRefundLogInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutRefundLogInputSchema) ]),
}).strict();

export default RefundRequestCreateOrConnectWithoutRefundLogInputSchema;
