import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceCreateWithoutResourceAssetInputSchema } from './ResourceCreateWithoutResourceAssetInputSchema';
import { ResourceUncheckedCreateWithoutResourceAssetInputSchema } from './ResourceUncheckedCreateWithoutResourceAssetInputSchema';
import { ResourceCreateOrConnectWithoutResourceAssetInputSchema } from './ResourceCreateOrConnectWithoutResourceAssetInputSchema';
import { ResourceWhereUniqueInputSchema } from './ResourceWhereUniqueInputSchema';

export const ResourceCreateNestedOneWithoutResourceAssetInputSchema: z.ZodType<Prisma.ResourceCreateNestedOneWithoutResourceAssetInput> = z.object({
  create: z.union([ z.lazy(() => ResourceCreateWithoutResourceAssetInputSchema),z.lazy(() => ResourceUncheckedCreateWithoutResourceAssetInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ResourceCreateOrConnectWithoutResourceAssetInputSchema).optional(),
  connect: z.lazy(() => ResourceWhereUniqueInputSchema).optional()
}).strict();

export default ResourceCreateNestedOneWithoutResourceAssetInputSchema;
