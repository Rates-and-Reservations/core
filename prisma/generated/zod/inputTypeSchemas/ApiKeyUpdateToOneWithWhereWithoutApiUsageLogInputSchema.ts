import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyWhereInputSchema } from './ApiKeyWhereInputSchema';
import { ApiKeyUpdateWithoutApiUsageLogInputSchema } from './ApiKeyUpdateWithoutApiUsageLogInputSchema';
import { ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema } from './ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema';

export const ApiKeyUpdateToOneWithWhereWithoutApiUsageLogInputSchema: z.ZodType<Prisma.ApiKeyUpdateToOneWithWhereWithoutApiUsageLogInput> = z.object({
  where: z.lazy(() => ApiKeyWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ApiKeyUpdateWithoutApiUsageLogInputSchema),z.lazy(() => ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema) ]),
}).strict();

export default ApiKeyUpdateToOneWithWhereWithoutApiUsageLogInputSchema;
