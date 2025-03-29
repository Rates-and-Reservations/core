import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsUpdateWithoutRefundLogInputSchema } from './PaymentActionsUpdateWithoutRefundLogInputSchema';
import { PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema } from './PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema';
import { PaymentActionsCreateWithoutRefundLogInputSchema } from './PaymentActionsCreateWithoutRefundLogInputSchema';
import { PaymentActionsUncheckedCreateWithoutRefundLogInputSchema } from './PaymentActionsUncheckedCreateWithoutRefundLogInputSchema';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';

export const PaymentActionsUpsertWithoutRefundLogInputSchema: z.ZodType<Prisma.PaymentActionsUpsertWithoutRefundLogInput> = z.object({
  update: z.union([ z.lazy(() => PaymentActionsUpdateWithoutRefundLogInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutRefundLogInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutRefundLogInputSchema) ]),
  where: z.lazy(() => PaymentActionsWhereInputSchema).optional()
}).strict();

export default PaymentActionsUpsertWithoutRefundLogInputSchema;
