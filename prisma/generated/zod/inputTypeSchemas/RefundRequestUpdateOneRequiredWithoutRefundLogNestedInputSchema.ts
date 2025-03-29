import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateWithoutRefundLogInputSchema } from './RefundRequestCreateWithoutRefundLogInputSchema';
import { RefundRequestUncheckedCreateWithoutRefundLogInputSchema } from './RefundRequestUncheckedCreateWithoutRefundLogInputSchema';
import { RefundRequestCreateOrConnectWithoutRefundLogInputSchema } from './RefundRequestCreateOrConnectWithoutRefundLogInputSchema';
import { RefundRequestUpsertWithoutRefundLogInputSchema } from './RefundRequestUpsertWithoutRefundLogInputSchema';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateToOneWithWhereWithoutRefundLogInputSchema } from './RefundRequestUpdateToOneWithWhereWithoutRefundLogInputSchema';
import { RefundRequestUpdateWithoutRefundLogInputSchema } from './RefundRequestUpdateWithoutRefundLogInputSchema';
import { RefundRequestUncheckedUpdateWithoutRefundLogInputSchema } from './RefundRequestUncheckedUpdateWithoutRefundLogInputSchema';

export const RefundRequestUpdateOneRequiredWithoutRefundLogNestedInputSchema: z.ZodType<Prisma.RefundRequestUpdateOneRequiredWithoutRefundLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutRefundLogInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutRefundLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => RefundRequestCreateOrConnectWithoutRefundLogInputSchema).optional(),
  upsert: z.lazy(() => RefundRequestUpsertWithoutRefundLogInputSchema).optional(),
  connect: z.lazy(() => RefundRequestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => RefundRequestUpdateToOneWithWhereWithoutRefundLogInputSchema),z.lazy(() => RefundRequestUpdateWithoutRefundLogInputSchema),z.lazy(() => RefundRequestUncheckedUpdateWithoutRefundLogInputSchema) ]).optional(),
}).strict();

export default RefundRequestUpdateOneRequiredWithoutRefundLogNestedInputSchema;
