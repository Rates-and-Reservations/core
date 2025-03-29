import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutRefundLogInputSchema } from './PaymentActionsCreateWithoutRefundLogInputSchema';
import { PaymentActionsUncheckedCreateWithoutRefundLogInputSchema } from './PaymentActionsUncheckedCreateWithoutRefundLogInputSchema';
import { PaymentActionsCreateOrConnectWithoutRefundLogInputSchema } from './PaymentActionsCreateOrConnectWithoutRefundLogInputSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';

export const PaymentActionsCreateNestedOneWithoutRefundLogInputSchema: z.ZodType<Prisma.PaymentActionsCreateNestedOneWithoutRefundLogInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutRefundLogInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutRefundLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentActionsCreateOrConnectWithoutRefundLogInputSchema).optional(),
  connect: z.lazy(() => PaymentActionsWhereUniqueInputSchema).optional()
}).strict();

export default PaymentActionsCreateNestedOneWithoutRefundLogInputSchema;
