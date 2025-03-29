import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsUpdateWithoutInvoicePaymentInputSchema } from './PaymentActionsUpdateWithoutInvoicePaymentInputSchema';
import { PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema } from './PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema';
import { PaymentActionsCreateWithoutInvoicePaymentInputSchema } from './PaymentActionsCreateWithoutInvoicePaymentInputSchema';
import { PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema } from './PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema';
import { PaymentActionsWhereInputSchema } from './PaymentActionsWhereInputSchema';

export const PaymentActionsUpsertWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.PaymentActionsUpsertWithoutInvoicePaymentInput> = z.object({
  update: z.union([ z.lazy(() => PaymentActionsUpdateWithoutInvoicePaymentInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutInvoicePaymentInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema) ]),
  where: z.lazy(() => PaymentActionsWhereInputSchema).optional()
}).strict();

export default PaymentActionsUpsertWithoutInvoicePaymentInputSchema;
