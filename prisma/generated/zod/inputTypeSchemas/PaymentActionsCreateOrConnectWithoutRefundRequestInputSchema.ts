import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsCreateWithoutRefundRequestInputSchema } from './PaymentActionsCreateWithoutRefundRequestInputSchema';
import { PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema } from './PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema';

export const PaymentActionsCreateOrConnectWithoutRefundRequestInputSchema: z.ZodType<Prisma.PaymentActionsCreateOrConnectWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutRefundRequestInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema) ]),
}).strict();

export default PaymentActionsCreateOrConnectWithoutRefundRequestInputSchema;
