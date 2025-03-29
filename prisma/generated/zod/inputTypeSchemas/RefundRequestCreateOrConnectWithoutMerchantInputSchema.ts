import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestCreateWithoutMerchantInputSchema } from './RefundRequestCreateWithoutMerchantInputSchema';
import { RefundRequestUncheckedCreateWithoutMerchantInputSchema } from './RefundRequestUncheckedCreateWithoutMerchantInputSchema';

export const RefundRequestCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.RefundRequestCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => RefundRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutMerchantInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default RefundRequestCreateOrConnectWithoutMerchantInputSchema;
