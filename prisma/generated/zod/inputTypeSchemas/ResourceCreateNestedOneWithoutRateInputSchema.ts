import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutRateInputSchema } from './ResourceCreateWithoutRateInputSchema';
import { ResourceUncheckedCreateWithoutRateInputSchema } from './ResourceUncheckedCreateWithoutRateInputSchema';
import { ResourceCreateOrConnectWithoutRateInputSchema } from './ResourceCreateOrConnectWithoutRateInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';

export const ResourceCreateNestedOneWithoutRateInputSchema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutRateInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutRateInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutRateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutRateInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional()
}).strict();

export default ResourceCreateNestedOneWithoutRateInputSchema;
