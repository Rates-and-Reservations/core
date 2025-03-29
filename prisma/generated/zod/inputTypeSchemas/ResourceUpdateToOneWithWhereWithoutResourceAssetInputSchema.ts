import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';
import { ResourceUpdateWithoutResourceAssetInputSchema } from './ResourceUpdateWithoutResourceAssetInputSchema';
import { ResourceUncheckedUpdateWithoutResourceAssetInputSchema } from './ResourceUncheckedUpdateWithoutResourceAssetInputSchema';

export const ResourceUpdateToOneWithWhereWithoutResourceAssetInputSchema: z.ZodType<Prisma.ResourceUpdateToOneWithWhereWithoutResourceAssetInput> = z.object({
  where: z.lazy(() => ResourceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ResourceUpdateWithoutResourceAssetInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutResourceAssetInputSchema) ]),
}).strict();

export default ResourceUpdateToOneWithWhereWithoutResourceAssetInputSchema;
