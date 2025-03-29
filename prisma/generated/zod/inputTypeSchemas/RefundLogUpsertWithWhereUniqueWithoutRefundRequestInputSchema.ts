import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';
import { RefundLogUpdateWithoutRefundRequestInputSchema } from './RefundLogUpdateWithoutRefundRequestInputSchema';
import { RefundLogUncheckedUpdateWithoutRefundRequestInputSchema } from './RefundLogUncheckedUpdateWithoutRefundRequestInputSchema';
import { RefundLogCreateWithoutRefundRequestInputSchema } from './RefundLogCreateWithoutRefundRequestInputSchema';
import { RefundLogUncheckedCreateWithoutRefundRequestInputSchema } from './RefundLogUncheckedCreateWithoutRefundRequestInputSchema';

export const RefundLogUpsertWithWhereUniqueWithoutRefundRequestInputSchema: z.ZodType<Prisma.RefundLogUpsertWithWhereUniqueWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => RefundLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RefundLogUpdateWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUncheckedUpdateWithoutRefundRequestInputSchema) ]),
  create: z.union([ z.lazy(() => RefundLogCreateWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUncheckedCreateWithoutRefundRequestInputSchema) ]),
}).strict();

export default RefundLogUpsertWithWhereUniqueWithoutRefundRequestInputSchema;
