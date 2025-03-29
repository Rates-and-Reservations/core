import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestScalarWhereInputSchema } from './RefundRequestScalarWhereInputSchema';
import { RefundRequestUpdateManyMutationInputSchema } from './RefundRequestUpdateManyMutationInputSchema';
import { RefundRequestUncheckedUpdateManyWithoutMerchantInputSchema } from './RefundRequestUncheckedUpdateManyWithoutMerchantInputSchema';

export const RefundRequestUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.RefundRequestUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => RefundRequestScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RefundRequestUpdateManyMutationInputSchema),z.lazy(() => RefundRequestUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default RefundRequestUpdateManyWithWhereWithoutMerchantInputSchema;
