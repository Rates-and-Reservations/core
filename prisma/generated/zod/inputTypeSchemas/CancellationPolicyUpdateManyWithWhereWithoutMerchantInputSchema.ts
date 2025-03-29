import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyScalarWhereInputSchema } from './CancellationPolicyScalarWhereInputSchema';
import { CancellationPolicyUpdateManyMutationInputSchema } from './CancellationPolicyUpdateManyMutationInputSchema';
import { CancellationPolicyUncheckedUpdateManyWithoutMerchantInputSchema } from './CancellationPolicyUncheckedUpdateManyWithoutMerchantInputSchema';

export const CancellationPolicyUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.CancellationPolicyUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => CancellationPolicyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CancellationPolicyUpdateManyMutationInputSchema),z.lazy(() => CancellationPolicyUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default CancellationPolicyUpdateManyWithWhereWithoutMerchantInputSchema;
