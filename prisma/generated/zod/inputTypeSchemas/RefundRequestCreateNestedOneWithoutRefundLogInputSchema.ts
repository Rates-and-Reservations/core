import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateWithoutRefundLogInputSchema } from './RefundRequestCreateWithoutRefundLogInputSchema';
import { RefundRequestUncheckedCreateWithoutRefundLogInputSchema } from './RefundRequestUncheckedCreateWithoutRefundLogInputSchema';
import { RefundRequestCreateOrConnectWithoutRefundLogInputSchema } from './RefundRequestCreateOrConnectWithoutRefundLogInputSchema';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';

export const RefundRequestCreateNestedOneWithoutRefundLogInputSchema: z.ZodType<Prisma.RefundRequestCreateNestedOneWithoutRefundLogInput> = z.object({
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutRefundLogInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutRefundLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RefundRequestCreateOrConnectWithoutRefundLogInputSchema).optional(),
  connect: z.lazy(() => RefundRequestWhereUniqueInputSchema).optional()
}).strict();

export default RefundRequestCreateNestedOneWithoutRefundLogInputSchema;
