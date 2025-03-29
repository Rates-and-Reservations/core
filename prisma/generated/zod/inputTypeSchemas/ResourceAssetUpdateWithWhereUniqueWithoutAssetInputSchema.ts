import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';
import { ResourceAssetUpdateWithoutAssetInputSchema } from './ResourceAssetUpdateWithoutAssetInputSchema';
import { ResourceAssetUncheckedUpdateWithoutAssetInputSchema } from './ResourceAssetUncheckedUpdateWithoutAssetInputSchema';

export const ResourceAssetUpdateWithWhereUniqueWithoutAssetInputSchema: z.ZodType<Prisma.ResourceAssetUpdateWithWhereUniqueWithoutAssetInput> = z.object({
  where: z.lazy(() => ResourceAssetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ResourceAssetUpdateWithoutAssetInputSchema),z.lazy(() => ResourceAssetUncheckedUpdateWithoutAssetInputSchema) ]),
}).strict();

export default ResourceAssetUpdateWithWhereUniqueWithoutAssetInputSchema;
