import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutInvoicePaymentInputSchema } from './PaymentActionsCreateWithoutInvoicePaymentInputSchema';
import { PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema } from './PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema';
import { PaymentActionsCreateOrConnectWithoutInvoicePaymentInputSchema } from './PaymentActionsCreateOrConnectWithoutInvoicePaymentInputSchema';
import { PaymentActionsUpsertWithoutInvoicePaymentInputSchema } from './PaymentActionsUpsertWithoutInvoicePaymentInputSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateToOneWithWhereWithoutInvoicePaymentInputSchema } from './PaymentActionsUpdateToOneWithWhereWithoutInvoicePaymentInputSchema';
import { PaymentActionsUpdateWithoutInvoicePaymentInputSchema } from './PaymentActionsUpdateWithoutInvoicePaymentInputSchema';
import { PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema } from './PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema';

export const PaymentActionsUpdateOneRequiredWithoutInvoicePaymentNestedInputSchema: z.ZodType<Prisma.PaymentActionsUpdateOneRequiredWithoutInvoicePaymentNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutInvoicePaymentInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutInvoicePaymentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentActionsCreateOrConnectWithoutInvoicePaymentInputSchema).optional(),
  upsert: z.lazy(() => PaymentActionsUpsertWithoutInvoicePaymentInputSchema).optional(),
  connect: z.lazy(() => PaymentActionsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PaymentActionsUpdateToOneWithWhereWithoutInvoicePaymentInputSchema),z.lazy(() => PaymentActionsUpdateWithoutInvoicePaymentInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutInvoicePaymentInputSchema) ]).optional(),
}).strict();

export default PaymentActionsUpdateOneRequiredWithoutInvoicePaymentNestedInputSchema;
