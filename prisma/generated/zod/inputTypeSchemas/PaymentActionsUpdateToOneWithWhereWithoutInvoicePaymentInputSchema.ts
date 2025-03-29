import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';
import { PaymentActionsUpdateWithoutInvoicePaymentInputSchema } from './PaymentActionsUpdateWithoutInvoicePaymentInputSchema';
import { PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema } from './PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema';

export const PaymentActionsUpdateToOneWithWhereWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.PaymentActionsUpdateToOneWithWhereWithoutInvoicePaymentInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => PaymentActionsUpdateWithoutInvoicePaymentInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema) ]),
}).strict();

export default PaymentActionsUpdateToOneWithWhereWithoutInvoicePaymentInputSchema;
