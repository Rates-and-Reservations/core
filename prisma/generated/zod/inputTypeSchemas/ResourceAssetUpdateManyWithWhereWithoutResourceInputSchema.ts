import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetScalarWhereInputSchema } from './ResourceAssetScalarWhereInputSchema';
import { ResourceAssetUpdateManyMutationInputSchema } from './ResourceAssetUpdateManyMutationInputSchema';
import { ResourceAssetUncheckedUpdateManyWithoutResourceInputSchema } from './ResourceAssetUncheckedUpdateManyWithoutResourceInputSchema';

export const ResourceAssetUpdateManyWithWhereWithoutResourceInputSchema: z.ZodType<Prisma.ResourceAssetUpdateManyWithWhereWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceAssetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ResourceAssetUpdateManyMutationInputSchema),z.lazy(() => ResourceAssetUncheckedUpdateManyWithoutResourceInputSchema) ]),
}).strict();

export default ResourceAssetUpdateManyWithWhereWithoutResourceInputSchema;
