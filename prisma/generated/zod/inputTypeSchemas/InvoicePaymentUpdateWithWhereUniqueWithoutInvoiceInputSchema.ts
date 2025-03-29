import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';
import { InvoicePaymentUpdateWithoutInvoiceInputSchema } from './InvoicePaymentUpdateWithoutInvoiceInputSchema';
import { InvoicePaymentUncheckedUpdateWithoutInvoiceInputSchema } from './InvoicePaymentUncheckedUpdateWithoutInvoiceInputSchema';

export const InvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoicePaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoicePaymentUpdateWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUncheckedUpdateWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputSchema;
