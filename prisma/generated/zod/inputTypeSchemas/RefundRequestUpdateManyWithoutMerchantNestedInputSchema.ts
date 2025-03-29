import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateWithoutMerchantInputSchema } from './RefundRequestCreateWithoutMerchantInputSchema';
import { RefundRequestUncheckedCreateWithoutMerchantInputSchema } from './RefundRequestUncheckedCreateWithoutMerchantInputSchema';
import { RefundRequestCreateOrConnectWithoutMerchantInputSchema } from './RefundRequestCreateOrConnectWithoutMerchantInputSchema';
import { RefundRequestUpsertWithWhereUniqueWithoutMerchantInputSchema } from './RefundRequestUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { RefundRequestCreateManyMerchantInputEnvelopeSchema } from './RefundRequestCreateManyMerchantInputEnvelopeSchema';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithWhereUniqueWithoutMerchantInputSchema } from './RefundRequestUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { RefundRequestUpdateManyWithWhereWithoutMerchantInputSchema } from './RefundRequestUpdateManyWithWhereWithoutMerchantInputSchema';
import { RefundRequestScalarWhereInputSchema } from './RefundRequestScalarWhereInputSchema';

export const RefundRequestUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.RefundRequestUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutMerchantInputSchema),z.lazy(() => RefundRequestCreateWithoutMerchantInputSchema).array(),z.lazy(() => RefundRequestUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundRequestCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => RefundRequestCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RefundRequestUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => RefundRequestUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundRequestCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RefundRequestUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => RefundRequestUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RefundRequestUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => RefundRequestUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RefundRequestScalarWhereInputSchema),z.lazy(() => RefundRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RefundRequestUpdateManyWithoutMerchantNestedInputSchema;
