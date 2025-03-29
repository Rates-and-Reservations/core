import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutCancellationPolicyInputSchema } from './MerchantUpdateWithoutCancellationPolicyInputSchema';
import { MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema } from './MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema';
import { MerchantCreateWithoutCancellationPolicyInputSchema } from './MerchantCreateWithoutCancellationPolicyInputSchema';
import { MerchantUncheckedCreateWithoutCancellationPolicyInputSchema } from './MerchantUncheckedCreateWithoutCancellationPolicyInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutCancellationPolicyInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutCancellationPolicyInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutCancellationPolicyInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutCancellationPolicyInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutCancellationPolicyInputSchema;
