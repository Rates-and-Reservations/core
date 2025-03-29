import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutRateInputSchema } from './ResourceCreateWithoutRateInputSchema';
import { ResourceUncheckedCreateWithoutRateInputSchema } from './ResourceUncheckedCreateWithoutRateInputSchema';
import { ResourceCreateOrConnectWithoutRateInputSchema } from './ResourceCreateOrConnectWithoutRateInputSchema';
import { ResourceUpsertWithoutRateInputSchema } from './ResourceUpsertWithoutRateInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateToOneWithWhereWithoutRateInputSchema } from './ResourceUpdateToOneWithWhereWithoutRateInputSchema';
import { ResourceUpdateWithoutRateInputSchema } from './ResourceUpdateWithoutRateInputSchema';
import { ResourceUncheckedUpdateWithoutRateInputSchema } from './ResourceUncheckedUpdateWithoutRateInputSchema';

export const ResourceUpdateOneRequiredWithoutRateNestedInputSchema: z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutRateNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutRateInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutRateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutRateInputSchema).optional(),
  upsert: z.lazy(() => ResourceUpsertWithoutRateInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ResourceUpdateToOneWithWhereWithoutRateInputSchema),z.lazy(() => ResourceUpdateWithoutRateInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutRateInputSchema) ]).optional(),
}).strict();

export default ResourceUpdateOneRequiredWithoutRateNestedInputSchema;
