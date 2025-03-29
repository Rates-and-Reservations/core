import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';
import { RefundLogCreateWithoutRefundRequestInputSchema } from './RefundLogCreateWithoutRefundRequestInputSchema';
import { RefundLogUncheckedCreateWithoutRefundRequestInputSchema } from './RefundLogUncheckedCreateWithoutRefundRequestInputSchema';

export const RefundLogCreateOrConnectWithoutRefundRequestInputSchema: z.ZodType<Prisma.RefundLogCreateOrConnectWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => RefundLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RefundLogCreateWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUncheckedCreateWithoutRefundRequestInputSchema) ]),
}).strict();

export default RefundLogCreateOrConnectWithoutRefundRequestInputSchema;
