import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutApiKeyInputSchema } from './MerchantCreateWithoutApiKeyInputSchema';
import { MerchantUncheckedCreateWithoutApiKeyInputSchema } from './MerchantUncheckedCreateWithoutApiKeyInputSchema';
import { MerchantCreateOrConnectWithoutApiKeyInputSchema } from './MerchantCreateOrConnectWithoutApiKeyInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutApiKeyInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutApiKeyInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiKeyInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiKeyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutApiKeyInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutApiKeyInputSchema;
