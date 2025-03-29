import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogScalarWhereInputSchema } from './ApiUsageLogScalarWhereInputSchema';
import { ApiUsageLogUpdateManyMutationInputSchema } from './ApiUsageLogUpdateManyMutationInputSchema';
import { ApiUsageLogUncheckedUpdateManyWithoutMerchantInputSchema } from './ApiUsageLogUncheckedUpdateManyWithoutMerchantInputSchema';

export const ApiUsageLogUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageLogUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => ApiUsageLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ApiUsageLogUpdateManyMutationInputSchema),z.lazy(() => ApiUsageLogUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default ApiUsageLogUpdateManyWithWhereWithoutMerchantInputSchema;
