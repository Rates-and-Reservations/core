import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutMerchantContactInputSchema } from './MerchantUpdateWithoutMerchantContactInputSchema';
import { MerchantUncheckedUpdateWithoutMerchantContactInputSchema } from './MerchantUncheckedUpdateWithoutMerchantContactInputSchema';
import { MerchantCreateWithoutMerchantContactInputSchema } from './MerchantCreateWithoutMerchantContactInputSchema';
import { MerchantUncheckedCreateWithoutMerchantContactInputSchema } from './MerchantUncheckedCreateWithoutMerchantContactInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutMerchantContactInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutMerchantContactInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutMerchantContactInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutMerchantContactInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutMerchantContactInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutMerchantContactInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutMerchantContactInputSchema;
