import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutCancellationPolicyInputSchema } from './MerchantUpdateWithoutCancellationPolicyInputSchema';
import { MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema } from './MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema';

export const MerchantUpdateToOneWithWhereWithoutCancellationPolicyInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutCancellationPolicyInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutCancellationPolicyInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutCancellationPolicyInputSchema;
