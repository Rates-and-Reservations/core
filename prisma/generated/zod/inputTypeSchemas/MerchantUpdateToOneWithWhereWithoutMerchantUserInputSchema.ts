import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutMerchantUserInputSchema } from './MerchantUpdateWithoutMerchantUserInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantUserInputSchema } from './MerchantUncheckedUpdateWithoutMerchantUserInputSchema';

export const MerchantUpdateToOneWithWhereWithoutMerchantUserInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutMerchantUserInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutMerchantUserInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantUserInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutMerchantUserInputSchema;
