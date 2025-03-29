import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutResourceAssetInputSchema } from './ResourceCreateWithoutResourceAssetInputSchema';
import { ResourceUncheckedCreateWithoutResourceAssetInputSchema } from './ResourceUncheckedCreateWithoutResourceAssetInputSchema';
import { ResourceCreateOrConnectWithoutResourceAssetInputSchema } from './ResourceCreateOrConnectWithoutResourceAssetInputSchema';
import { ResourceUpsertWithoutResourceAssetInputSchema } from './ResourceUpsertWithoutResourceAssetInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';
import { ResourceUpdateToOneWithWhereWithoutResourceAssetInputSchema } from './ResourceUpdateToOneWithWhereWithoutResourceAssetInputSchema';
import { ResourceUpdateWithoutResourceAssetInputSchema } from './ResourceUpdateWithoutResourceAssetInputSchema';
import { ResourceUncheckedUpdateWithoutResourceAssetInputSchema } from './ResourceUncheckedUpdateWithoutResourceAssetInputSchema';

export const ResourceUpdateOneRequiredWithoutResourceAssetNestedInputSchema: z.ZodType<Prisma.ResourceUpdateOneRequiredWithoutResourceAssetNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutResourceAssetInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutResourceAssetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResourceAssetInputSchema).optional(),
  upsert: z.lazy(() => ResourceUpsertWithoutResourceAssetInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ResourceUpdateToOneWithWhereWithoutResourceAssetInputSchema),z.lazy(() => ResourceUpdateWithoutResourceAssetInputSchema),z.lazy(() => ResourceUncheckedUpdateWithoutResourceAssetInputSchema) ]).optional(),
}).strict();

export default ResourceUpdateOneRequiredWithoutResourceAssetNestedInputSchema;
