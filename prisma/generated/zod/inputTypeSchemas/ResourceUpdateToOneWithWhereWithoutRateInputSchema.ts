import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { ResourceUpdateWithoutRateInputSchema } from './ResourceUpdateWithoutRateInputSchema';
import { ResourceUncheckedUpdateWithoutRateInputSchema } from './ResourceUncheckedUpdateWithoutRateInputSchema';

export const ResourceUpdateToOneWithWhereWithoutRateInputSchema: z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutRateInput> = z.object({
  where: z.lazy(() => ResourceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ResourceUpdateWithoutRateInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutRateInputSchema) ]),
}).strict();

export default ResourceUpdateToOneWithWhereWithoutRateInputSchema;
