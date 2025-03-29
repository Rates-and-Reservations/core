import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsCreateWithoutRefundLogInputSchema } from './PaymentActionsCreateWithoutRefundLogInputSchema';
import { PaymentActionsUncheckedCreateWithoutRefundLogInputSchema } from './PaymentActionsUncheckedCreateWithoutRefundLogInputSchema';

export const PaymentActionsCreateOrConnectWithoutRefundLogInputSchema: z.ZodType<Prisma.PaymentActionsCreateOrConnectWithoutRefundLogInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutRefundLogInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutRefundLogInputSchema) ]),
}).strict();

export default PaymentActionsCreateOrConnectWithoutRefundLogInputSchema;
