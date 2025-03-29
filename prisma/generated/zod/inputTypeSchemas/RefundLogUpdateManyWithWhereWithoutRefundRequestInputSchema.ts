import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogScalarWhereInputSchema } from './RefundLogScalarWhereInputSchema';
import { RefundLogUpdateManyMutationInputSchema } from './RefundLogUpdateManyMutationInputSchema';
import { RefundLogUncheckedUpdateManyWithoutRefundRequestInputSchema } from './RefundLogUncheckedUpdateManyWithoutRefundRequestInputSchema';

export const RefundLogUpdateManyWithWhereWithoutRefundRequestInputSchema: z.ZodType<Prisma.RefundLogUpdateManyWithWhereWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => RefundLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RefundLogUpdateManyMutationInputSchema),z.lazy(() => RefundLogUncheckedUpdateManyWithoutRefundRequestInputSchema) ]),
}).strict();

export default RefundLogUpdateManyWithWhereWithoutRefundRequestInputSchema;
