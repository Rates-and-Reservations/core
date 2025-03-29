import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';
import { ApiUsageStatUpdateWithoutApiKeyInputSchema } from './ApiUsageStatUpdateWithoutApiKeyInputSchema';
import { ApiUsageStatUncheckedUpdateWithoutApiKeyInputSchema } from './ApiUsageStatUncheckedUpdateWithoutApiKeyInputSchema';

export const ApiUsageStatUpdateWithWhereUniqueWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageStatUpdateWithWhereUniqueWithoutApiKeyInput> = z.object({
  where: z.lazy(() => ApiUsageStatWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ApiUsageStatUpdateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUncheckedUpdateWithoutApiKeyInputSchema) ]),
}).strict();

export default ApiUsageStatUpdateWithWhereUniqueWithoutApiKeyInputSchema;
