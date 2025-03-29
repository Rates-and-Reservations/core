import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceScalarWhereInputSchema } from './ResourceScalarWhereInputSchema';
import { ResourceUpdateManyMutationInputSchema } from './ResourceUpdateManyMutationInputSchema';
import { ResourceUncheckedUpdateManyWithoutMerchantInputSchema } from './ResourceUncheckedUpdateManyWithoutMerchantInputSchema';

export const ResourceUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => ResourceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ResourceUpdateManyMutationInputSchema),z.lazy(() => ResourceUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default ResourceUpdateManyWithWhereWithoutMerchantInputSchema;
