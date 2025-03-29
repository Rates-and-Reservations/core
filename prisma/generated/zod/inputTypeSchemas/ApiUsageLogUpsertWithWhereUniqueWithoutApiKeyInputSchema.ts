import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';
import { ApiUsageLogUpdateWithoutApiKeyInputSchema } from './ApiUsageLogUpdateWithoutApiKeyInputSchema';
import { ApiUsageLogUncheckedUpdateWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedUpdateWithoutApiKeyInputSchema';
import { ApiUsageLogCreateWithoutApiKeyInputSchema } from './ApiUsageLogCreateWithoutApiKeyInputSchema';
import { ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema';

export const ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInput> = z.object({
  where: z.lazy(() => ApiUsageLogWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ApiUsageLogUpdateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUncheckedUpdateWithoutApiKeyInputSchema) ]),
  create: z.union([ z.lazy(() => ApiUsageLogCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema) ]),
}).strict();

export default ApiUsageLogUpsertWithWhereUniqueWithoutApiKeyInputSchema;
