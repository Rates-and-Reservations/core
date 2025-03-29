import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceUpdateWithoutRateInputSchema } from './ResourceUpdateWithoutRateInputSchema';
import { ResourceUncheckedUpdateWithoutRateInputSchema } from './ResourceUncheckedUpdateWithoutRateInputSchema';
import { ResourceCreateWithoutRateInputSchema } from './ResourceCreateWithoutRateInputSchema';
import { ResourceUncheckedCreateWithoutRateInputSchema } from './ResourceUncheckedCreateWithoutRateInputSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';

export const ResourceUpsertWithoutRateInputSchema: z.ZodType<Prisma.ResourceUpsertWithoutRateInput> = z.object({
  update: z.union([ z.lazy(() => ResourceUpdateWithoutRateInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutRateInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceCreateWithoutRateInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutRateInputSchema) ]),
  where: z.lazy(() => ResourceWhereInputSchema).optional()
}).strict();

export default ResourceUpsertWithoutRateInputSchema;
