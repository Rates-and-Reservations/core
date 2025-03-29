import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';
import { InvoicePaymentCreateWithoutInvoiceInputSchema } from './InvoicePaymentCreateWithoutInvoiceInputSchema';
import { InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema } from './InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema';

export const InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoicePaymentCreateOrConnectWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoicePaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoicePaymentCreateWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema;
