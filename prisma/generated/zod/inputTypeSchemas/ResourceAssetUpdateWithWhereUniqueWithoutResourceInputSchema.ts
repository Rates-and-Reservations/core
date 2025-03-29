import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';
import { ResourceAssetUpdateWithoutResourceInputSchema } from './ResourceAssetUpdateWithoutResourceInputSchema';
import { ResourceAssetUncheckedUpdateWithoutResourceInputSchema } from './ResourceAssetUncheckedUpdateWithoutResourceInputSchema';

export const ResourceAssetUpdateWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.ResourceAssetUpdateWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceAssetWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ResourceAssetUpdateWithoutResourceInputSchema),z.lazy(() => ResourceAssetUncheckedUpdateWithoutResourceInputSchema) ]),
}).strict();

export default ResourceAssetUpdateWithWhereUniqueWithoutResourceInputSchema;
