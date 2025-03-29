import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';
import { ResourceAssetUpdateWithoutAssetInputSchema } from './ResourceAssetUpdateWithoutAssetInputSchema';
import { ResourceAssetUncheckedUpdateWithoutAssetInputSchema } from './ResourceAssetUncheckedUpdateWithoutAssetInputSchema';
import { ResourceAssetCreateWithoutAssetInputSchema } from './ResourceAssetCreateWithoutAssetInputSchema';
import { ResourceAssetUncheckedCreateWithoutAssetInputSchema } from './ResourceAssetUncheckedCreateWithoutAssetInputSchema';

export const ResourceAssetUpsertWithWhereUniqueWithoutAssetInputSchema: z.ZodType<Prisma.ResourceAssetUpsertWithWhereUniqueWithoutAssetInput> = z.object({
  where: z.lazy(() => ResourceAssetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ResourceAssetUpdateWithoutAssetInputSchema),z.lazy(() => ResourceAssetUncheckedUpdateWithoutAssetInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceAssetCreateWithoutAssetInputSchema),z.lazy(() => ResourceAssetUncheckedCreateWithoutAssetInputSchema) ]),
}).strict();

export default ResourceAssetUpsertWithWhereUniqueWithoutAssetInputSchema;
