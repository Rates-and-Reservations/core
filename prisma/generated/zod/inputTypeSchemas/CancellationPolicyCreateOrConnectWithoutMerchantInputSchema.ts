import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyWhereUniqueInputSchema } from './CancellationPolicyWhereUniqueInputSchema';
import { CancellationPolicyCreateWithoutMerchantInputSchema } from './CancellationPolicyCreateWithoutMerchantInputSchema';
import { CancellationPolicyUncheckedCreateWithoutMerchantInputSchema } from './CancellationPolicyUncheckedCreateWithoutMerchantInputSchema';

export const CancellationPolicyCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.CancellationPolicyCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => CancellationPolicyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CancellationPolicyCreateWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default CancellationPolicyCreateOrConnectWithoutMerchantInputSchema;
