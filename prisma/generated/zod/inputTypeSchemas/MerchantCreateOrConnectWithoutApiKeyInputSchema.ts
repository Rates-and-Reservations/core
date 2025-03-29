import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutApiKeyInputSchema } from './MerchantCreateWithoutApiKeyInputSchema';
import { MerchantUncheckedCreateWithoutApiKeyInputSchema } from './MerchantUncheckedCreateWithoutApiKeyInputSchema';

export const MerchantCreateOrConnectWithoutApiKeyInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutApiKeyInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiKeyInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiKeyInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutApiKeyInputSchema;
