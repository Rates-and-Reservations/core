import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceUpdateWithoutResourceAssetInputSchema } from './ResourceUpdateWithoutResourceAssetInputSchema';
import { ResourceUncheckedUpdateWithoutResourceAssetInputSchema } from './ResourceUncheckedUpdateWithoutResourceAssetInputSchema';
import { ResourceCreateWithoutResourceAssetInputSchema } from './ResourceCreateWithoutResourceAssetInputSchema';
import { ResourceUncheckedCreateWithoutResourceAssetInputSchema } from './ResourceUncheckedCreateWithoutResourceAssetInputSchema';
import { ResourceWhereInputSchema } from './ResourceWhereInputSchema';

export const ResourceUpsertWithoutResourceAssetInputSchema: z.ZodType<Prisma.ResourceUpsertWithoutResourceAssetInput> = z.object({
  update: z.union([ z.lazy(() => ResourceUpdateWithoutResourceAssetInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutResourceAssetInputSchema) ]),
  create: z.union([ z.lazy(() => ResourceCreateWithoutResourceAssetInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutResourceAssetInputSchema) ]),
  where: z.lazy(() => ResourceWhereInputSchema).optional()
}).strict();

export default ResourceUpsertWithoutResourceAssetInputSchema;
