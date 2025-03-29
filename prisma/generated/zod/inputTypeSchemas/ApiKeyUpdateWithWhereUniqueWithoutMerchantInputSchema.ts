import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';
import { ApiKeyUpdateWithoutMerchantInputSchema } from './ApiKeyUpdateWithoutMerchantInputSchema';
import { ApiKeyUncheckedUpdateWithoutMerchantInputSchema } from './ApiKeyUncheckedUpdateWithoutMerchantInputSchema';

export const ApiKeyUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ApiKeyUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ApiKeyUpdateWithoutMerchantInputSchema),z.lazy(() => ApiKeyUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default ApiKeyUpdateWithWhereUniqueWithoutMerchantInputSchema;
