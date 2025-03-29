import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';
import { RefundLogUpdateWithoutRefundRequestInputSchema } from './RefundLogUpdateWithoutRefundRequestInputSchema';
import { RefundLogUncheckedUpdateWithoutRefundRequestInputSchema } from './RefundLogUncheckedUpdateWithoutRefundRequestInputSchema';

export const RefundLogUpdateWithWhereUniqueWithoutRefundRequestInputSchema: z.ZodType<Prisma.RefundLogUpdateWithWhereUniqueWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => RefundLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RefundLogUpdateWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUncheckedUpdateWithoutRefundRequestInputSchema) ]),
}).strict();

export default RefundLogUpdateWithWhereUniqueWithoutRefundRequestInputSchema;
