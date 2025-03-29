import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutMerchantUserInputSchema } from './MerchantUpdateWithoutMerchantUserInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantUserInputSchema } from './MerchantUncheckedUpdateWithoutMerchantUserInputSchema';
import { MerchantCreateWithoutMerchantUserInputSchema } from './MerchantCreateWithoutMerchantUserInputSchema';
import { MerchantUncheckedCreateWithoutMerchantUserInputSchema } from './MerchantUncheckedCreateWithoutMerchantUserInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutMerchantUserInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutMerchantUserInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutMerchantUserInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantUserInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantUserInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantUserInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutMerchantUserInputSchema;
