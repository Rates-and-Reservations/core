import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetCreateWithoutMerchantInputSchema } from './MerchantAssetCreateWithoutMerchantInputSchema';
import { MerchantAssetUncheckedCreateWithoutMerchantInputSchema } from './MerchantAssetUncheckedCreateWithoutMerchantInputSchema';
import { MerchantAssetCreateOrConnectWithoutMerchantInputSchema } from './MerchantAssetCreateOrConnectWithoutMerchantInputSchema';
import { MerchantAssetUpsertWithWhereUniqueWithoutMerchantInputSchema } from './MerchantAssetUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { MerchantAssetCreateManyMerchantInputEnvelopeSchema } from './MerchantAssetCreateManyMerchantInputEnvelopeSchema';
import { MerchantAssetWhereUniqueInputSchema } from './MerchantAssetWhereUniqueInputSchema';
import { MerchantAssetUpdateWithWhereUniqueWithoutMerchantInputSchema } from './MerchantAssetUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { MerchantAssetUpdateManyWithWhereWithoutMerchantInputSchema } from './MerchantAssetUpdateManyWithWhereWithoutMerchantInputSchema';
import { MerchantAssetScalarWhereInputSchema } from './MerchantAssetScalarWhereInputSchema';

export const MerchantAssetUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.MerchantAssetUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantAssetCreateWithoutMerchantInputSchema),z.lazy(() => MerchantAssetCreateWithoutMerchantInputSchema).array(),z.lazy(() => MerchantAssetUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MerchantAssetCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => MerchantAssetCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => MerchantAssetUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MerchantAssetCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => MerchantAssetWhereUniqueInputSchema),z.lazy(() => MerchantAssetWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => MerchantAssetWhereUniqueInputSchema),z.lazy(() => MerchantAssetWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => MerchantAssetWhereUniqueInputSchema),z.lazy(() => MerchantAssetWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => MerchantAssetWhereUniqueInputSchema),z.lazy(() => MerchantAssetWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => MerchantAssetUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => MerchantAssetUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => MerchantAssetScalarWhereInputSchema),z.lazy(() => MerchantAssetScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default MerchantAssetUpdateManyWithoutMerchantNestedInputSchema;
