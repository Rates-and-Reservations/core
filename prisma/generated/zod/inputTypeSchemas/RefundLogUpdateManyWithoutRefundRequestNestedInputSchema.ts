import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogCreateWithoutRefundRequestInputSchema } from './RefundLogCreateWithoutRefundRequestInputSchema';
import { RefundLogUncheckedCreateWithoutRefundRequestInputSchema } from './RefundLogUncheckedCreateWithoutRefundRequestInputSchema';
import { RefundLogCreateOrConnectWithoutRefundRequestInputSchema } from './RefundLogCreateOrConnectWithoutRefundRequestInputSchema';
import { RefundLogUpsertWithWhereUniqueWithoutRefundRequestInputSchema } from './RefundLogUpsertWithWhereUniqueWithoutRefundRequestInputSchema';
import { RefundLogCreateManyRefundRequestInputEnvelopeSchema } from './RefundLogCreateManyRefundRequestInputEnvelopeSchema';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';
import { RefundLogUpdateWithWhereUniqueWithoutRefundRequestInputSchema } from './RefundLogUpdateWithWhereUniqueWithoutRefundRequestInputSchema';
import { RefundLogUpdateManyWithWhereWithoutRefundRequestInputSchema } from './RefundLogUpdateManyWithWhereWithoutRefundRequestInputSchema';
import { RefundLogScalarWhereInputSchema } from './RefundLogScalarWhereInputSchema';

export const RefundLogUpdateManyWithoutRefundRequestNestedInputSchema: z.ZodType<Prisma.RefundLogUpdateManyWithoutRefundRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => RefundLogCreateWithoutRefundRequestInputSchema),z.lazy(() => RefundLogCreateWithoutRefundRequestInputSchema).array(),z.lazy(() => RefundLogUncheckedCreateWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUncheckedCreateWithoutRefundRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundLogCreateOrConnectWithoutRefundRequestInputSchema),z.lazy(() => RefundLogCreateOrConnectWithoutRefundRequestInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RefundLogUpsertWithWhereUniqueWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUpsertWithWhereUniqueWithoutRefundRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundLogCreateManyRefundRequestInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RefundLogUpdateWithWhereUniqueWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUpdateWithWhereUniqueWithoutRefundRequestInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RefundLogUpdateManyWithWhereWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUpdateManyWithWhereWithoutRefundRequestInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RefundLogScalarWhereInputSchema),z.lazy(() => RefundLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RefundLogUpdateManyWithoutRefundRequestNestedInputSchema;
