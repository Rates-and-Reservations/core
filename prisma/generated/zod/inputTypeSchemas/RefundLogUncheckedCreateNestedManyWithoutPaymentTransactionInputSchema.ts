import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogCreateWithoutPaymentTransactionInputSchema } from './RefundLogCreateWithoutPaymentTransactionInputSchema';
import { RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema } from './RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema';
import { RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema } from './RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema';
import { RefundLogCreateManyPaymentTransactionInputEnvelopeSchema } from './RefundLogCreateManyPaymentTransactionInputEnvelopeSchema';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';

export const RefundLogUncheckedCreateNestedManyWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundLogUncheckedCreateNestedManyWithoutPaymentTransactionInput> = z.object({
  create: z.union([ z.lazy(() => RefundLogCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogCreateWithoutPaymentTransactionInputSchema).array(),z.lazy(() => RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogUncheckedCreateWithoutPaymentTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema),z.lazy(() => RefundLogCreateOrConnectWithoutPaymentTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundLogCreateManyPaymentTransactionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RefundLogUncheckedCreateNestedManyWithoutPaymentTransactionInputSchema;
