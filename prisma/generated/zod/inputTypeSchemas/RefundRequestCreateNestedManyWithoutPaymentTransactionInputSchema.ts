import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundRequestCreateWithoutPaymentTransactionInputSchema } from './RefundRequestCreateWithoutPaymentTransactionInputSchema';
import { RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema } from './RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema';
import { RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema } from './RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema';
import { RefundRequestCreateManyPaymentTransactionInputEnvelopeSchema } from './RefundRequestCreateManyPaymentTransactionInputEnvelopeSchema';
import { RefundRequestWhereUniqueInputSchema } from './RefundRequestWhereUniqueInputSchema';

export const RefundRequestCreateNestedManyWithoutPaymentTransactionInputSchema: z.ZodType<Prisma.RefundRequestCreateNestedManyWithoutPaymentTransactionInput> = z.object({
  create: z.union([ z.lazy(() => RefundRequestCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestCreateWithoutPaymentTransactionInputSchema).array(),z.lazy(() => RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestUncheckedCreateWithoutPaymentTransactionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema),z.lazy(() => RefundRequestCreateOrConnectWithoutPaymentTransactionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundRequestCreateManyPaymentTransactionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RefundRequestWhereUniqueInputSchema),z.lazy(() => RefundRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RefundRequestCreateNestedManyWithoutPaymentTransactionInputSchema;
