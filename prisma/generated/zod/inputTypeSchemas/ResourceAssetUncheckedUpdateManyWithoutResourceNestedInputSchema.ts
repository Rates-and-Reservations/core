import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetCreateWithoutResourceInputSchema } from './ResourceAssetCreateWithoutResourceInputSchema';
import { ResourceAssetUncheckedCreateWithoutResourceInputSchema } from './ResourceAssetUncheckedCreateWithoutResourceInputSchema';
import { ResourceAssetCreateOrConnectWithoutResourceInputSchema } from './ResourceAssetCreateOrConnectWithoutResourceInputSchema';
import { ResourceAssetUpsertWithWhereUniqueWithoutResourceInputSchema } from './ResourceAssetUpsertWithWhereUniqueWithoutResourceInputSchema';
import { ResourceAssetCreateManyResourceInputEnvelopeSchema } from './ResourceAssetCreateManyResourceInputEnvelopeSchema';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';
import { ResourceAssetUpdateWithWhereUniqueWithoutResourceInputSchema } from './ResourceAssetUpdateWithWhereUniqueWithoutResourceInputSchema';
import { ResourceAssetUpdateManyWithWhereWithoutResourceInputSchema } from './ResourceAssetUpdateManyWithWhereWithoutResourceInputSchema';
import { ResourceAssetScalarWhereInputSchema } from './ResourceAssetScalarWhereInputSchema';

export const ResourceAssetUncheckedUpdateManyWithoutResourceNestedInputSchema: z.ZodType<Prisma.ResourceAssetUncheckedUpdateManyWithoutResourceNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceAssetCreateWithoutResourceInputSchema),z.lazy(() => ResourceAssetCreateWithoutResourceInputSchema).array(),z.lazy(() => ResourceAssetUncheckedCreateWithoutResourceInputSchema),z.lazy(() => ResourceAssetUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceAssetCreateOrConnectWithoutResourceInputSchema),z.lazy(() => ResourceAssetCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResourceAssetUpsertWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => ResourceAssetUpsertWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceAssetCreateManyResourceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResourceAssetUpdateWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => ResourceAssetUpdateWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResourceAssetUpdateManyWithWhereWithoutResourceInputSchema),z.lazy(() => ResourceAssetUpdateManyWithWhereWithoutResourceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResourceAssetScalarWhereInputSchema),z.lazy(() => ResourceAssetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ResourceAssetUncheckedUpdateManyWithoutResourceNestedInputSchema;
