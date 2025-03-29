import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogCreateWithoutPaymentTransactionInputSchema } from './RefundLogCreateWithoutPaymentTransactionInputSchema';
import { RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema } from './RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema';
import { RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema } from './RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema';
import { RefundLogUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema } from './RefundLogUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema';
import { RefundLogCreateManyPaymentTransactionInputEnvelopeSchema } from './RefundLogCreateManyPaymentTransactionInputEnvelopeSchema';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';
import { RefundLogUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema } from './RefundLogUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema';
import { RefundLogUpdateManyWithWhereWithoutPaymentTransactionInputSchema } from './RefundLogUpdateManyWithWhereWithoutPaymentTransactionInputSchema';
import { RefundLogScalarWhereInputSchema } from './RefundLogScalarWhereInputSchema';

export const RefundLogUpdateManyWithoutPaymentTransactionNestedInputSchema: z.ZodType<Prisma.RefundLogUpdateManyWithoutPaymentTransactionNestedInput> = z.object({
  create: z.union([ z.lazy(() => RefundLogCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogCreateWithoutPaymentTransactionInputSchema).array(),z.lazy(() => RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RefundLogUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundLogCreateManyPaymentTransactionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RefundLogUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RefundLogUpdateManyWithWhereWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUpdateManyWithWhereWithoutPaymentTransactionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RefundLogScalarWhereInputSchema),z.lazy(() => RefundLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RefundLogUpdateManyWithoutPaymentTransactionNestedInputSchema;
