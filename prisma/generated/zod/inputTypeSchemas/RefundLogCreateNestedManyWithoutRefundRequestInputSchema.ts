import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RefundLogCreateWithoutRefundRequestInputSchema } from './RefundLogCreateWithoutRefundRequestInputSchema';
import { RefundLogUncheckedCreateWithoutRefundRequestInputSchema } from './RefundLogUncheckedCreateWithoutRefundRequestInputSchema';
import { RefundLogCreateOrConnectWithoutRefundRequestInputSchema } from './RefundLogCreateOrConnectWithoutRefundRequestInputSchema';
import { RefundLogCreateManyRefundRequestInputEnvelopeSchema } from './RefundLogCreateManyRefundRequestInputEnvelopeSchema';
import { RefundLogWhereUniqueInputSchema } from './RefundLogWhereUniqueInputSchema';

export const RefundLogCreateNestedManyWithoutRefundRequestInputSchema: z.ZodType<Prisma.RefundLogCreateNestedManyWithoutRefundRequestInput> = z.object({
  create: z.union([ z.lazy(() => RefundLogCreateWithoutRefundRequestInputSchema),z.lazy(() => RefundLogCreateWithoutRefundRequestInputSchema).array(),z.lazy(() => RefundLogUncheckedCreateWithoutRefundRequestInputSchema),z.lazy(() => RefundLogUncheckedCreateWithoutRefundRequestInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RefundLogCreateOrConnectWithoutRefundRequestInputSchema),z.lazy(() => RefundLogCreateOrConnectWithoutRefundRequestInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RefundLogCreateManyRefundRequestInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RefundLogWhereUniqueInputSchema),z.lazy(() => RefundLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default RefundLogCreateNestedManyWithoutRefundRequestInputSchema;
