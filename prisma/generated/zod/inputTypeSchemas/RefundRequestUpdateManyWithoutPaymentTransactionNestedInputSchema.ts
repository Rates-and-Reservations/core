import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateWithoutPaymentTransactionInputSchema } from './RefundRequestCreateWithoutPaymentTransactionInputSchema';
import { RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema } from './RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema';
import { RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema } from './RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema';
import { RefundRequestUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema } from './RefundRequestUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema';
import { RefundRequestCreateManyPaymentTransactionInputEnvelopeSchema } from './RefundRequestCreateManyPaymentTransactionInputEnvelopeSchema';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';
import { RefundRequestUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema } from './RefundRequestUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema';
import { RefundRequestUpdateManyWithWhereWithoutPaymentTransactionInputSchema } from './RefundRequestUpdateManyWithWhereWithoutPaymentTransactionInputSchema';
import { RefundRequestScalarWhereInputSchema } from './RefundRequestScalarWhereInputSchema';

export const RefundRequestUpdateManyWithoutPaymentTransactionNestedInputSchema: z.ZodType<Prisma.RefundRequestUpdateManyWithoutPaymentTransactionNestedInput> = z.object({
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestCreateWithoutPaymentTransactionInputSchema).array(),z.lazy(() => RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RefundRequestUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUpsertWithWhereUniqueWithoutPaymentTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundRequestCreateManyPaymentTransactionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RefundRequestUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUpdateWithWhereUniqueWithoutPaymentTransactionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RefundRequestUpdateManyWithWhereWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUpdateManyWithWhereWithoutPaymentTransactionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RefundRequestScalarWhereInputSchema),z.lazy(() => RefundRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default RefundRequestUpdateManyWithoutPaymentTransactionNestedInputSchema;
