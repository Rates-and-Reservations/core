import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';
import { ApiUsageLogUpdateWithoutApiKeyInputSchema } from './ApiUsageLogUpdateWithoutApiKeyInputSchema';
import { ApiUsageLogUncheckedUpdateWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedUpdateWithoutApiKeyInputSchema';

export const ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInput> = z.object({
  where: z.lazy(() => ApiUsageLogWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ApiUsageLogUpdateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUncheckedUpdateWithoutApiKeyInputSchema) ]),
}).strict();

export default ApiUsageLogUpdateWithWhereUniqueWithoutApiKeyInputSchema;
