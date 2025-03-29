import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';
import { InvoicePaymentUpdateWithoutInvoiceInputSchema } from './InvoicePaymentUpdateWithoutInvoiceInputSchema';
import { InvoicePaymentUncheckedUpdateWithoutInvoiceInputSchema } from './InvoicePaymentUncheckedUpdateWithoutInvoiceInputSchema';
import { InvoicePaymentCreateWithoutInvoiceInputSchema } from './InvoicePaymentCreateWithoutInvoiceInputSchema';
import { InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema } from './InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema';

export const InvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoicePaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvoicePaymentUpdateWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUncheckedUpdateWithoutInvoiceInputSchema) ]),
  create: z.union([ z.lazy(() => InvoicePaymentCreateWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputSchema;
