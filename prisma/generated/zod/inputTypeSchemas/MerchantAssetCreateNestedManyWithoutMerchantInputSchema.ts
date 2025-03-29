import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantAssetCreateWithoutMerchantInputSchema } from './MerchantAssetCreateWithoutMerchantInputSchema';
import { MerchantAssetUncheckedCreateWithoutMerchantInputSchema } from './MerchantAssetUncheckedCreateWithoutMerchantInputSchema';
import { MerchantAssetCreateOrConnectWithoutMerchantInputSchema } from './MerchantAssetCreateOrConnectWithoutMerchantInputSchema';
import { MerchantAssetCreateManyMerchantInputEnvelopeSchema } from './MerchantAssetCreateManyMerchantInputEnvelopeSchema';
import { MerchantAssetWhereUniqueInputSchema } from './MerchantAssetWhereUniqueInputSchema';

export const MerchantAssetCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.MerchantAssetCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => MerchantAssetCreateWithoutMerchantInputSchema),z.lazy(() => MerchantAssetCreateWithoutMerchantInputSchema).array(),z.lazy(() => MerchantAssetUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => MerchantAssetUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => MerchantAssetCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => MerchantAssetCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => MerchantAssetCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => MerchantAssetWhereUniqueInputSchema),z.lazy(() => MerchantAssetWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default MerchantAssetCreateNestedManyWithoutMerchantInputSchema;
