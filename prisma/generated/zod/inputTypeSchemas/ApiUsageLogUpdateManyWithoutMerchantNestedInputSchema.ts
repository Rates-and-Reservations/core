import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogCreateWithoutMerchantInputSchema } from './ApiUsageLogCreateWithoutMerchantInputSchema';
import { ApiUsageLogUncheckedCreateWithoutMerchantInputSchema } from './ApiUsageLogUncheckedCreateWithoutMerchantInputSchema';
import { ApiUsageLogCreateOrConnectWithoutMerchantInputSchema } from './ApiUsageLogCreateOrConnectWithoutMerchantInputSchema';
import { ApiUsageLogUpsertWithWhereUniqueWithoutMerchantInputSchema } from './ApiUsageLogUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { ApiUsageLogCreateManyMerchantInputEnvelopeSchema } from './ApiUsageLogCreateManyMerchantInputEnvelopeSchema';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';
import { ApiUsageLogUpdateWithWhereUniqueWithoutMerchantInputSchema } from './ApiUsageLogUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { ApiUsageLogUpdateManyWithWhereWithoutMerchantInputSchema } from './ApiUsageLogUpdateManyWithWhereWithoutMerchantInputSchema';
import { ApiUsageLogScalarWhereInputSchema } from './ApiUsageLogScalarWhereInputSchema';

export const ApiUsageLogUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.ApiUsageLogUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApiUsageLogCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogCreateWithoutMerchantInputSchema).array(),z.lazy(() => ApiUsageLogUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiUsageLogCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApiUsageLogUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiUsageLogCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApiUsageLogUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApiUsageLogUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApiUsageLogScalarWhereInputSchema),z.lazy(() => ApiUsageLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ApiUsageLogUpdateManyWithoutMerchantNestedInputSchema;
