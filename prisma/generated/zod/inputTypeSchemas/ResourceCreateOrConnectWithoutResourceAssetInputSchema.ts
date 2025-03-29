import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceCreateWithoutResourceAssetInputSchema } from './ResourceCreateWithoutResourceAssetInputSchema';
import { ResourceUncheckedCreateWithoutResourceAssetInputSchema } from './ResourceUncheckedCreateWithoutResourceAssetInputSchema';

export const ResourceCreateOrConnectWithoutResourceAssetInputSchema: z.ZodType<Prisma.ResourceCreateOrConnectWithoutResourceAssetInput> = z.object({
  where: z.lazy(() => ResourceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ResourceCreateWithoutResourceAssetInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutResourceAssetInputSchema) ]),
}).strict();

export default ResourceCreateOrConnectWithoutResourceAssetInputSchema;
