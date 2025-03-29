import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutCancellationPolicyInputSchema } from './MerchantCreateWithoutCancellationPolicyInputSchema';
import { MerchantUncheckedCreateWithoutCancellationPolicyInputSchema } from './MerchantUncheckedCreateWithoutCancellationPolicyInputSchema';

export const MerchantCreateOrConnectWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutCancellationPolicyInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutCancellationPolicyInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutCancellationPolicyInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutCancellationPolicyInputSchema;
