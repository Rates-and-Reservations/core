import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';
import { ResourceAssetCreateWithoutAssetInputSchema } from './ResourceAssetCreateWithoutAssetInputSchema';
import { ResourceAssetUncheckedCreateWithoutAssetInputSchema } from './ResourceAssetUncheckedCreateWithoutAssetInputSchema';

export const ResourceAssetCreateOrConnectWithoutAssetInputSchema: z.ZodType<Prisma.ResourceAssetCreateOrConnectWithoutAssetInput> = z.object({
  where: z.lazy(() => ResourceAssetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceAssetCreateWithoutAssetInputSchema),z.lazy(() => ResourceAssetUncheckedCreateWithoutAssetInputSchema) ]),
}).strict();

export default ResourceAssetCreateOrConnectWithoutAssetInputSchema;
