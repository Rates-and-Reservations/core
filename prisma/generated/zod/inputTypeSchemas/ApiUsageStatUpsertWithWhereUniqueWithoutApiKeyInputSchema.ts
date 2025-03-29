import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';
import { ApiUsageStatUpdateWithoutApiKeyInputSchema } from './ApiUsageStatUpdateWithoutApiKeyInputSchema';
import { ApiUsageStatUncheckedUpdateWithoutApiKeyInputSchema } from './ApiUsageStatUncheckedUpdateWithoutApiKeyInputSchema';
import { ApiUsageStatCreateWithoutApiKeyInputSchema } from './ApiUsageStatCreateWithoutApiKeyInputSchema';
import { ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema } from './ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema';

export const ApiUsageStatUpsertWithWhereUniqueWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageStatUpsertWithWhereUniqueWithoutApiKeyInput> = z.object({
  where: z.lazy(() => ApiUsageStatWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ApiUsageStatUpdateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUncheckedUpdateWithoutApiKeyInputSchema) ]),
  create: z.union([ z.lazy(() => ApiUsageStatCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema) ]),
}).strict();

export default ApiUsageStatUpsertWithWhereUniqueWithoutApiKeyInputSchema;
