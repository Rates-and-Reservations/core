import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';
import { ResourceAssetUpdateWithoutResourceInputSchema } from './ResourceAssetUpdateWithoutResourceInputSchema';
import { ResourceAssetUncheckedUpdateWithoutResourceInputSchema } from './ResourceAssetUncheckedUpdateWithoutResourceInputSchema';
import { ResourceAssetCreateWithoutResourceInputSchema } from './ResourceAssetCreateWithoutResourceInputSchema';
import { ResourceAssetUncheckedCreateWithoutResourceInputSchema } from './ResourceAssetUncheckedCreateWithoutResourceInputSchema';

export const ResourceAssetUpsertWithWhereUniqueWithoutResourceInputSchema: z.ZodType<Prisma.ResourceAssetUpsertWithWhereUniqueWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceAssetWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ResourceAssetUpdateWithoutResourceInputSchema),z.lazy(() => ResourceAssetUncheckedUpdateWithoutResourceInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceAssetCreateWithoutResourceInputSchema),z.lazy(() => ResourceAssetUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default ResourceAssetUpsertWithWhereUniqueWithoutResourceInputSchema;
