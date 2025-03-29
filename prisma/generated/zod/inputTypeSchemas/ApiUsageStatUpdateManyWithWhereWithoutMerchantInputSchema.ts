import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatScalarWhereInputSchema } from './ApiUsageStatScalarWhereInputSchema';
import { ApiUsageStatUpdateManyMutationInputSchema } from './ApiUsageStatUpdateManyMutationInputSchema';
import { ApiUsageStatUncheckedUpdateManyWithoutMerchantInputSchema } from './ApiUsageStatUncheckedUpdateManyWithoutMerchantInputSchema';

export const ApiUsageStatUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageStatUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiUsageStatScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ApiUsageStatUpdateManyMutationInputSchema),z.lazy(() => ApiUsageStatUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default ApiUsageStatUpdateManyWithWhereWithoutMerchantInputSchema;
