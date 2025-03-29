import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutInvoicePaymentInputSchema } from './PaymentActionsCreateWithoutInvoicePaymentInputSchema';
import { PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema } from './PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema';
import { PaymentActionsCreateOrConnectWithoutInvoicePaymentInputSchema } from './PaymentActionsCreateOrConnectWithoutInvoicePaymentInputSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';

export const PaymentActionsCreateNestedOneWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.PaymentActionsCreateNestedOneWithoutInvoicePaymentInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutInvoicePaymentInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentActionsCreateOrConnectWithoutInvoicePaymentInputSchema).optional(),
  connect: z.lazy(() => PaymentActionsWhereUniqueInputSchema).optional()
}).strict();

export default PaymentActionsCreateNestedOneWithoutInvoicePaymentInputSchema;
