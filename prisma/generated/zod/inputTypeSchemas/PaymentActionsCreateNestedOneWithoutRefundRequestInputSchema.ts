import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutRefundRequestInputSchema } from './PaymentActionsCreateWithoutRefundRequestInputSchema';
import { PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema } from './PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema';
import { PaymentActionsCreateOrConnectWithoutRefundRequestInputSchema } from './PaymentActionsCreateOrConnectWithoutRefundRequestInputSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';

export const PaymentActionsCreateNestedOneWithoutRefundRequestInputSchema: z.ZodType<Prisma.PaymentActionsCreateNestedOneWithoutRefundRequestInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutRefundRequestInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentActionsCreateOrConnectWithoutRefundRequestInputSchema).optional(),
  connect: z.lazy(() => PaymentActionsWhereUniqueInputSchema).optional()
}).strict();

export default PaymentActionsCreateNestedOneWithoutRefundRequestInputSchema;
