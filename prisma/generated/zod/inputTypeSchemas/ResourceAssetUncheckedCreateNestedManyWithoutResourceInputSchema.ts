import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetCreateWithoutResourceInputSchema } from './ResourceAssetCreateWithoutResourceInputSchema';
import { ResourceAssetUncheckedCreateWithoutResourceInputSchema } from './ResourceAssetUncheckedCreateWithoutResourceInputSchema';
import { ResourceAssetCreateOrConnectWithoutResourceInputSchema } from './ResourceAssetCreateOrConnectWithoutResourceInputSchema';
import { ResourceAssetCreateManyResourceInputEnvelopeSchema } from './ResourceAssetCreateManyResourceInputEnvelopeSchema';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';

export const ResourceAssetUncheckedCreateNestedManyWithoutResourceInputSchema: z.ZodType<Prisma.ResourceAssetUncheckedCreateNestedManyWithoutResourceInput> = z.object({
  create: z.union([ z.lazy(() => ResourceAssetCreateWithoutResourceInputSchema),z.lazy(() => ResourceAssetCreateWithoutResourceInputSchema).array(),z.lazy(() => ResourceAssetUncheckedCreateWithoutResourceInputSchema),z.lazy(() => ResourceAssetUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceAssetCreateOrConnectWithoutResourceInputSchema),z.lazy(() => ResourceAssetCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceAssetCreateManyResourceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ResourceAssetUncheckedCreateNestedManyWithoutResourceInputSchema;
