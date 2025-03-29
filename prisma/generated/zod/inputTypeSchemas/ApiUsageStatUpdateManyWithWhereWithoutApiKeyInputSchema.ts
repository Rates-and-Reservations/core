import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatScalarWhereInputSchema } from './ApiUsageStatScalarWhereInputSchema';
import { ApiUsageStatUpdateManyMutationInputSchema } from './ApiUsageStatUpdateManyMutationInputSchema';
import { ApiUsageStatUncheckedUpdateManyWithoutApiKeyInputSchema } from './ApiUsageStatUncheckedUpdateManyWithoutApiKeyInputSchema';

export const ApiUsageStatUpdateManyWithWhereWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageStatUpdateManyWithWhereWithoutApiKeyInput> = z.object({
  where: z.lazy(() => ApiUsageStatScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ApiUsageStatUpdateManyMutationInputSchema),z.lazy(() => ApiUsageStatUncheckedUpdateManyWithoutApiKeyInputSchema) ]),
}).strict();

export default ApiUsageStatUpdateManyWithWhereWithoutApiKeyInputSchema;
