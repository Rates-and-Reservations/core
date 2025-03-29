import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';
import { PaymentActionsUpdateWithoutRefundLogInputSchema } from './PaymentActionsUpdateWithoutRefundLogInputSchema';
import { PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema } from './PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema';

export const PaymentActionsUpdateToOneWithWhereWithoutRefundLogInputSchema: z.ZodType<Prisma.PaymentActionsUpdateToOneWithWhereWithoutRefundLogInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PaymentActionsUpdateWithoutRefundLogInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema) ]),
}).strict();

export default PaymentActionsUpdateToOneWithWhereWithoutRefundLogInputSchema;
