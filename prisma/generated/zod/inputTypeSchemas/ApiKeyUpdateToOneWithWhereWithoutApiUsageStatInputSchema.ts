import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyWhereInputSchema } from './ApiKeyWhereInputSchema';
import { ApiKeyUpdateWithoutApiUsageStatInputSchema } from './ApiKeyUpdateWithoutApiUsageStatInputSchema';
import { ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema } from './ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema';

export const ApiKeyUpdateToOneWithWhereWithoutApiUsageStatInputSchema: z.ZodType<Prisma.ApiKeyUpdateToOneWithWhereWithoutApiUsageStatInput> = z.object({
  where: z.lazy(() => ApiKeyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ApiKeyUpdateWithoutApiUsageStatInputSchema),z.lazy(() => ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema) ]),
}).strict();

export default ApiKeyUpdateToOneWithWhereWithoutApiUsageStatInputSchema;
