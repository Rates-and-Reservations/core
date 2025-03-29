import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyWhereUniqueInputSchema } from './CancellationPolicyWhereUniqueInputSchema';
import { CancellationPolicyUpdateWithoutMerchantInputSchema } from './CancellationPolicyUpdateWithoutMerchantInputSchema';
import { CancellationPolicyUncheckedUpdateWithoutMerchantInputSchema } from './CancellationPolicyUncheckedUpdateWithoutMerchantInputSchema';

export const CancellationPolicyUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.CancellationPolicyUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => CancellationPolicyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CancellationPolicyUpdateWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default CancellationPolicyUpdateWithWhereUniqueWithoutMerchantInputSchema;
