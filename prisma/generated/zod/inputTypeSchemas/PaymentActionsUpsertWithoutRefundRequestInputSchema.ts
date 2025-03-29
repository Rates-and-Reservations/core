import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsUpdateWithoutRefundRequestInputSchema } from './PaymentActionsUpdateWithoutRefundRequestInputSchema';
import { PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema } from './PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema';
import { PaymentActionsCreateWithoutRefundRequestInputSchema } from './PaymentActionsCreateWithoutRefundRequestInputSchema';
import { PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema } from './PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';

export const PaymentActionsUpsertWithoutRefundRequestInputSchema: z.ZodType<Prisma.PaymentActionsUpsertWithoutRefundRequestInput> = z.object({
  update: z.union([ z.lazy(() => PaymentActionsUpdateWithoutRefundRequestInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutRefundRequestInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema) ]),
  where: z.lazy(() => PaymentActionsWhereInputSchema).optional()
}).strict();

export default PaymentActionsUpsertWithoutRefundRequestInputSchema;
