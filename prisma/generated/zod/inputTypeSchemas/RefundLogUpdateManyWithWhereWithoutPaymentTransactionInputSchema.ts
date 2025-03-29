import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogScalarWhereInputSchema } from './RefundLogScalarWhereInputSchema';
import { RefundLogUpdateManyMutationInputSchema } from './RefundLogUpdateManyMutationInputSchema';
import { RefundLogUncheckedUpdateManyWithoutPaymentTransactionInputSchema } from './RefundLogUncheckedUpdateManyWithoutPaymentTransactionInputSchema';

export const RefundLogUpdateManyWithWhereWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundLogUpdateManyWithWhereWithoutPaymentTransactionInput> = z.object({
  where: z.lazy(() => RefundLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RefundLogUpdateManyMutationInputSchema),z.lazy(() => RefundLogUncheckedUpdateManyWithoutPaymentTransactionInputSchema) ]),
}).strict();

export default RefundLogUpdateManyWithWhereWithoutPaymentTransactionInputSchema;
