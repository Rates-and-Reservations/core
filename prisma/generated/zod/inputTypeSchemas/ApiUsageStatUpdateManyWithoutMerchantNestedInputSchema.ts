import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatCreateWithoutMerchantInputSchema } from './ApiUsageStatCreateWithoutMerchantInputSchema';
import { ApiUsageStatUncheckedCreateWithoutMerchantInputSchema } from './ApiUsageStatUncheckedCreateWithoutMerchantInputSchema';
import { ApiUsageStatCreateOrConnectWithoutMerchantInputSchema } from './ApiUsageStatCreateOrConnectWithoutMerchantInputSchema';
import { ApiUsageStatUpsertWithWhereUniqueWithoutMerchantInputSchema } from './ApiUsageStatUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { ApiUsageStatCreateManyMerchantInputEnvelopeSchema } from './ApiUsageStatCreateManyMerchantInputEnvelopeSchema';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';
import { ApiUsageStatUpdateWithWhereUniqueWithoutMerchantInputSchema } from './ApiUsageStatUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { ApiUsageStatUpdateManyWithWhereWithoutMerchantInputSchema } from './ApiUsageStatUpdateManyWithWhereWithoutMerchantInputSchema';
import { ApiUsageStatScalarWhereInputSchema } from './ApiUsageStatScalarWhereInputSchema';

export const ApiUsageStatUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.ApiUsageStatUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApiUsageStatCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatCreateWithoutMerchantInputSchema).array(),z.lazy(() => ApiUsageStatUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiUsageStatCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApiUsageStatUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiUsageStatCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApiUsageStatUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApiUsageStatUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApiUsageStatScalarWhereInputSchema),z.lazy(() => ApiUsageStatScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ApiUsageStatUpdateManyWithoutMerchantNestedInputSchema;
