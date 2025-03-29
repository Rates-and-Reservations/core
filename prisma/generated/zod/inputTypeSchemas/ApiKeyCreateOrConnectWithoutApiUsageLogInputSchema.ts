import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';
import { ApiKeyCreateWithoutApiUsageLogInputSchema } from './ApiKeyCreateWithoutApiUsageLogInputSchema';
import { ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema } from './ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema';

export const ApiKeyCreateOrConnectWithoutApiUsageLogInputSchema: z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutApiUsageLogInput> = z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutApiUsageLogInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema) ]),
}).strict();

export default ApiKeyCreateOrConnectWithoutApiUsageLogInputSchema;
