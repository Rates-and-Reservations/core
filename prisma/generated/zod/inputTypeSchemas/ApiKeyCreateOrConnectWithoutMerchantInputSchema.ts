import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';
import { ApiKeyCreateWithoutMerchantInputSchema } from './ApiKeyCreateWithoutMerchantInputSchema';
import { ApiKeyUncheckedCreateWithoutMerchantInputSchema } from './ApiKeyUncheckedCreateWithoutMerchantInputSchema';

export const ApiKeyCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutMerchantInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiKeyCreateOrConnectWithoutMerchantInputSchema;
