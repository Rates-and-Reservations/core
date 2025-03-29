import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';
import { ApiUsageLogCreateWithoutApiKeyInputSchema } from './ApiUsageLogCreateWithoutApiKeyInputSchema';
import { ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema';

export const ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageLogCreateOrConnectWithoutApiKeyInput> = z.object({
  where: z.lazy(() => ApiUsageLogWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApiUsageLogCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema) ]),
}).strict();

export default ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema;
