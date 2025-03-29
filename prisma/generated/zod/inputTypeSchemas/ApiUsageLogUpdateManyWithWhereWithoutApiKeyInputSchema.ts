import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogScalarWhereInputSchema } from './ApiUsageLogScalarWhereInputSchema';
import { ApiUsageLogUpdateManyMutationInputSchema } from './ApiUsageLogUpdateManyMutationInputSchema';
import { ApiUsageLogUncheckedUpdateManyWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedUpdateManyWithoutApiKeyInputSchema';

export const ApiUsageLogUpdateManyWithWhereWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageLogUpdateManyWithWhereWithoutApiKeyInput> = z.object({
  where: z.lazy(() => ApiUsageLogScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ApiUsageLogUpdateManyMutationInputSchema),z.lazy(() => ApiUsageLogUncheckedUpdateManyWithoutApiKeyInputSchema) ]),
}).strict();

export default ApiUsageLogUpdateManyWithWhereWithoutApiKeyInputSchema;
