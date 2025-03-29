import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';
import { ApiKeyCreateWithoutApiUsageStatInputSchema } from './ApiKeyCreateWithoutApiUsageStatInputSchema';
import { ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema } from './ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema';

export const ApiKeyCreateOrConnectWithoutApiUsageStatInputSchema: z.ZodType<Prisma.ApiKeyCreateOrConnectWithoutApiUsageStatInput> = z.object({
  where: z.lazy(() => ApiKeyWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutApiUsageStatInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema) ]),
}).strict();

export default ApiKeyCreateOrConnectWithoutApiUsageStatInputSchema;
