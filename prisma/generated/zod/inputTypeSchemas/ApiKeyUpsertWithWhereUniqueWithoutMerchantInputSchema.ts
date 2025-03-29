import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';
import { ApiKeyUpdateWithoutMerchantInputSchema } from './ApiKeyUpdateWithoutMerchantInputSchema';
import { ApiKeyUncheckedUpdateWithoutMerchantInputSchema } from './ApiKeyUncheckedUpdateWithoutMerchantInputSchema';
import { ApiKeyCreateWithoutMerchantInputSchema } from './ApiKeyCreateWithoutMerchantInputSchema';
import { ApiKeyUncheckedCreateWithoutMerchantInputSchema } from './ApiKeyUncheckedCreateWithoutMerchantInputSchema';

export const ApiKeyUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ApiKeyUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ApiKeyUpdateWithoutMerchantInputSchema),z.lazy(() => ApiKeyUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutMerchantInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiKeyUpsertWithWhereUniqueWithoutMerchantInputSchema;
