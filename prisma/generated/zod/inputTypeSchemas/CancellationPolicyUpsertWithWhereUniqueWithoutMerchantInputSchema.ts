import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CancellationPolicyWhereUniqueInputSchema } from './CancellationPolicyWhereUniqueInputSchema';
import { CancellationPolicyUpdateWithoutMerchantInputSchema } from './CancellationPolicyUpdateWithoutMerchantInputSchema';
import { CancellationPolicyUncheckedUpdateWithoutMerchantInputSchema } from './CancellationPolicyUncheckedUpdateWithoutMerchantInputSchema';
import { CancellationPolicyCreateWithoutMerchantInputSchema } from './CancellationPolicyCreateWithoutMerchantInputSchema';
import { CancellationPolicyUncheckedCreateWithoutMerchantInputSchema } from './CancellationPolicyUncheckedCreateWithoutMerchantInputSchema';

export const CancellationPolicyUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.CancellationPolicyUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => CancellationPolicyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CancellationPolicyUpdateWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => CancellationPolicyCreateWithoutMerchantInputSchema),z.lazy(() => CancellationPolicyUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default CancellationPolicyUpsertWithWhereUniqueWithoutMerchantInputSchema;
