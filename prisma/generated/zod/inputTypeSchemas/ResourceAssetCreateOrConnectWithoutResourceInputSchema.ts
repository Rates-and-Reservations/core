import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';
import { ResourceAssetCreateWithoutResourceInputSchema } from './ResourceAssetCreateWithoutResourceInputSchema';
import { ResourceAssetUncheckedCreateWithoutResourceInputSchema } from './ResourceAssetUncheckedCreateWithoutResourceInputSchema';

export const ResourceAssetCreateOrConnectWithoutResourceInputSchema: z.ZodType<Prisma.ResourceAssetCreateOrConnectWithoutResourceInput> = z.object({
  where: z.lazy(() => ResourceAssetWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceAssetCreateWithoutResourceInputSchema),z.lazy(() => ResourceAssetUncheckedCreateWithoutResourceInputSchema) ]),
}).strict();

export default ResourceAssetCreateOrConnectWithoutResourceInputSchema;
