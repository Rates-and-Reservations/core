import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateWithoutMerchantInputSchema } from './ResourceUpdateWithoutMerchantInputSchema';
import { ResourceUncheckedUpdateWithoutMerchantInputSchema } from './ResourceUncheckedUpdateWithoutMerchantInputSchema';

export const ResourceUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ResourceUpdateWithoutMerchantInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default ResourceUpdateWithWhereUniqueWithoutMerchantInputSchema;
