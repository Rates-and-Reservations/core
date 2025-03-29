import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutApiKeyInputSchema } from './MerchantUpdateWithoutApiKeyInputSchema';
import { MerchantUncheckedUpdateWithoutApiKeyInputSchema } from './MerchantUncheckedUpdateWithoutApiKeyInputSchema';
import { MerchantCreateWithoutApiKeyInputSchema } from './MerchantCreateWithoutApiKeyInputSchema';
import { MerchantUncheckedCreateWithoutApiKeyInputSchema } from './MerchantUncheckedCreateWithoutApiKeyInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutApiKeyInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutApiKeyInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutApiKeyInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiKeyInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiKeyInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiKeyInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutApiKeyInputSchema;
