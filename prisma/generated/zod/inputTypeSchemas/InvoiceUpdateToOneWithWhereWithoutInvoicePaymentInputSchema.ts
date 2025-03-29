import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';
import { InvoiceUpdateWithoutInvoicePaymentInputSchema } from './InvoiceUpdateWithoutInvoicePaymentInputSchema';
import { InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema } from './InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema';

export const InvoiceUpdateToOneWithWhereWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.InvoiceUpdateToOneWithWhereWithoutInvoicePaymentInput> = z.object({
  where: z.lazy(() => InvoiceWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InvoiceUpdateWithoutInvoicePaymentInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema) ]),
}).strict();

export default InvoiceUpdateToOneWithWhereWithoutInvoicePaymentInputSchema;
