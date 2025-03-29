import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceCreateWithoutRateInputSchema } from './ResourceCreateWithoutRateInputSchema';
import { ResourceUncheckedCreateWithoutRateInputSchema } from './ResourceUncheckedCreateWithoutRateInputSchema';

export const ResourceCreateOrConnectWithoutRateInputSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutRateInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceCreateWithoutRateInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutRateInputSchema) ]),
}).strict();

export default ResourceCreateOrConnectWithoutRateInputSchema;
