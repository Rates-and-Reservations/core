import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsCreateWithoutInvoicePaymentInputSchema } from './PaymentActionsCreateWithoutInvoicePaymentInputSchema';
import { PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema } from './PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema';

export const PaymentActionsCreateOrConnectWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.PaymentActionsCreateOrConnectWithoutInvoicePaymentInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutInvoicePaymentInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema) ]),
}).strict();

export default PaymentActionsCreateOrConnectWithoutInvoicePaymentInputSchema;
