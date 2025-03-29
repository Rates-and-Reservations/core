import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetCreateWithoutAssetInputSchema } from './ResourceAssetCreateWithoutAssetInputSchema';
import { ResourceAssetUncheckedCreateWithoutAssetInputSchema } from './ResourceAssetUncheckedCreateWithoutAssetInputSchema';
import { ResourceAssetCreateOrConnectWithoutAssetInputSchema } from './ResourceAssetCreateOrConnectWithoutAssetInputSchema';
import { ResourceAssetCreateManyAssetInputEnvelopeSchema } from './ResourceAssetCreateManyAssetInputEnvelopeSchema';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';

export const ResourceAssetCreateNestedManyWithoutAssetInputSchema: z.ZodType<Prisma.ResourceAssetCreateNestedManyWithoutAssetInput> = z.object({
  create: z.union([ z.lazy(() => ResourceAssetCreateWithoutAssetInputSchema),z.lazy(() => ResourceAssetCreateWithoutAssetInputSchema).array(),z.lazy(() => ResourceAssetUncheckedCreateWithoutAssetInputSchema),z.lazy(() => ResourceAssetUncheckedCreateWithoutAssetInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceAssetCreateOrConnectWithoutAssetInputSchema),z.lazy(() => ResourceAssetCreateOrConnectWithoutAssetInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceAssetCreateManyAssetInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ResourceAssetCreateNestedManyWithoutAssetInputSchema;
