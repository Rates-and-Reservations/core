import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';
import { ApiUsageStatCreateWithoutApiKeyInputSchema } from './ApiUsageStatCreateWithoutApiKeyInputSchema';
import { ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema } from './ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema';

export const ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageStatCreateOrConnectWithoutApiKeyInput> = z.object({
  where: z.lazy(() => ApiUsageStatWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApiUsageStatCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema) ]),
}).strict();

export default ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema;
