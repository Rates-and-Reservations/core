import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyUpdateWithoutApiUsageLogInputSchema } from './ApiKeyUpdateWithoutApiUsageLogInputSchema';
import { ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema } from './ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema';
import { ApiKeyCreateWithoutApiUsageLogInputSchema } from './ApiKeyCreateWithoutApiUsageLogInputSchema';
import { ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema } from './ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema';
import { ApiKeyWhereInputSchema } from './ApiKeyWhereInputSchema';

export const ApiKeyUpsertWithoutApiUsageLogInputSchema: z.ZodType<Prisma.ApiKeyUpsertWithoutApiUsageLogInput> = z.object({
  update: z.union([ z.lazy(() => ApiKeyUpdateWithoutApiUsageLogInputSchema),z.lazy(() => ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema) ]),
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutApiUsageLogInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema) ]),
  where: z.lazy(() => ApiKeyWhereInputSchema).optional()
}).strict();

export default ApiKeyUpsertWithoutApiUsageLogInputSchema;
