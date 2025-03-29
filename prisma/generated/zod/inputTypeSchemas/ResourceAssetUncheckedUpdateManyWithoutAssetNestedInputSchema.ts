import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ResourceAssetCreateWithoutAssetInputSchema } from './ResourceAssetCreateWithoutAssetInputSchema';
import { ResourceAssetUncheckedCreateWithoutAssetInputSchema } from './ResourceAssetUncheckedCreateWithoutAssetInputSchema';
import { ResourceAssetCreateOrConnectWithoutAssetInputSchema } from './ResourceAssetCreateOrConnectWithoutAssetInputSchema';
import { ResourceAssetUpsertWithWhereUniqueWithoutAssetInputSchema } from './ResourceAssetUpsertWithWhereUniqueWithoutAssetInputSchema';
import { ResourceAssetCreateManyAssetInputEnvelopeSchema } from './ResourceAssetCreateManyAssetInputEnvelopeSchema';
import { ResourceAssetWhereUniqueInputSchema } from './ResourceAssetWhereUniqueInputSchema';
import { ResourceAssetUpdateWithWhereUniqueWithoutAssetInputSchema } from './ResourceAssetUpdateWithWhereUniqueWithoutAssetInputSchema';
import { ResourceAssetUpdateManyWithWhereWithoutAssetInputSchema } from './ResourceAssetUpdateManyWithWhereWithoutAssetInputSchema';
import { ResourceAssetScalarWhereInputSchema } from './ResourceAssetScalarWhereInputSchema';

export const ResourceAssetUncheckedUpdateManyWithoutAssetNestedInputSchema: z.ZodType<Prisma.ResourceAssetUncheckedUpdateManyWithoutAssetNestedInput> = z.object({
  create: z.union([ z.lazy(() => ResourceAssetCreateWithoutAssetInputSchema),z.lazy(() => ResourceAssetCreateWithoutAssetInputSchema).array(),z.lazy(() => ResourceAssetUncheckedCreateWithoutAssetInputSchema),z.lazy(() => ResourceAssetUncheckedCreateWithoutAssetInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ResourceAssetCreateOrConnectWithoutAssetInputSchema),z.lazy(() => ResourceAssetCreateOrConnectWithoutAssetInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ResourceAssetUpsertWithWhereUniqueWithoutAssetInputSchema),z.lazy(() => ResourceAssetUpsertWithWhereUniqueWithoutAssetInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ResourceAssetCreateManyAssetInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ResourceAssetWhereUniqueInputSchema),z.lazy(() => ResourceAssetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ResourceAssetUpdateWithWhereUniqueWithoutAssetInputSchema),z.lazy(() => ResourceAssetUpdateWithWhereUniqueWithoutAssetInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ResourceAssetUpdateManyWithWhereWithoutAssetInputSchema),z.lazy(() => ResourceAssetUpdateManyWithWhereWithoutAssetInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ResourceAssetScalarWhereInputSchema),z.lazy(() => ResourceAssetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ResourceAssetUncheckedUpdateManyWithoutAssetNestedInputSchema;
