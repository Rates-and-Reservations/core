import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutCancellationPolicyInputSchema } from './MerchantCreateWithoutCancellationPolicyInputSchema';
import { MerchantUncheckedCreateWithoutCancellationPolicyInputSchema } from './MerchantUncheckedCreateWithoutCancellationPolicyInputSchema';
import { MerchantCreateOrConnectWithoutCancellationPolicyInputSchema } from './MerchantCreateOrConnectWithoutCancellationPolicyInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutCancellationPolicyInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutCancellationPolicyInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutCancellationPolicyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutCancellationPolicyInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutCancellationPolicyInputSchema;
