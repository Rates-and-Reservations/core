import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyUpdateWithoutApiUsageStatInputSchema } from './ApiKeyUpdateWithoutApiUsageStatInputSchema';
import { ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema } from './ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema';
import { ApiKeyCreateWithoutApiUsageStatInputSchema } from './ApiKeyCreateWithoutApiUsageStatInputSchema';
import { ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema } from './ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema';
import { ApiKeyWhereInputSchema } from './ApiKeyWhereInputSchema';

export const ApiKeyUpsertWithoutApiUsageStatInputSchema: z.ZodType<Prisma.ApiKeyUpsertWithoutApiUsageStatInput> = z.object({
  update: z.union([ z.lazy(() => ApiKeyUpdateWithoutApiUsageStatInputSchema),z.lazy(() => ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema) ]),
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutApiUsageStatInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema) ]),
  where: z.lazy(() => ApiKeyWhereInputSchema).optional()
}).strict();

export default ApiKeyUpsertWithoutApiUsageStatInputSchema;
