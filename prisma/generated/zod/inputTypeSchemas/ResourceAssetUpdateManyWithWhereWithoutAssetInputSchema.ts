import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetScalarWhereInputSchema } from './ResourceAssetScalarWhereInputSchema';
import { ResourceAssetUpdateManyMutationInputSchema } from './ResourceAssetUpdateManyMutationInputSchema';
import { ResourceAssetUncheckedUpdateManyWithoutAssetInputSchema } from './ResourceAssetUncheckedUpdateManyWithoutAssetInputSchema';

export const ResourceAssetUpdateManyWithWhereWithoutAssetInputSchema: z.ZodType<Prisma.ResourceAssetUpdateManyWithWhereWithoutAssetInput> = z.object({
  where: z.lazy(() => ResourceAssetScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ResourceAssetUpdateManyMutationInputSchema),z.lazy(() => ResourceAssetUncheckedUpdateManyWithoutAssetInputSchema) ]),
}).strict();

export default ResourceAssetUpdateManyWithWhereWithoutAssetInputSchema;
