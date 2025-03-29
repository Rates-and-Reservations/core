import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';
import { PaymentActionsUpdateWithoutRefundRequestInputSchema } from './PaymentActionsUpdateWithoutRefundRequestInputSchema';
import { PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema } from './PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema';

export const PaymentActionsUpdateToOneWithWhereWithoutRefundRequestInputSchema: z.ZodType<Prisma.PaymentActionsUpdateToOneWithWhereWithoutRefundRequestInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PaymentActionsUpdateWithoutRefundRequestInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema) ]),
}).strict();

export default PaymentActionsUpdateToOneWithWhereWithoutRefundRequestInputSchema;
