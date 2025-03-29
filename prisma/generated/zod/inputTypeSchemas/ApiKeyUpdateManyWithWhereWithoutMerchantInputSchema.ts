import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyScalarWhereInputSchema } from './ApiKeyScalarWhereInputSchema';
import { ApiKeyUpdateManyMutationInputSchema } from './ApiKeyUpdateManyMutationInputSchema';
import { ApiKeyUncheckedUpdateManyWithoutMerchantInputSchema } from './ApiKeyUncheckedUpdateManyWithoutMerchantInputSchema';

export const ApiKeyUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.ApiKeyUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiKeyScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ApiKeyUpdateManyMutationInputSchema),z.lazy(() => ApiKeyUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default ApiKeyUpdateManyWithWhereWithoutMerchantInputSchema;
