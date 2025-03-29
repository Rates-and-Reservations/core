import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceUpdateWithoutInvoicePaymentInputSchema } from './InvoiceUpdateWithoutInvoicePaymentInputSchema';
import { InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema } from './InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema';
import { InvoiceCreateWithoutInvoicePaymentInputSchema } from './InvoiceCreateWithoutInvoicePaymentInputSchema';
import { InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema } from './InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema';
import { InvoiceWhereInputSchema } from './InvoiceWhereInputSchema';

export const InvoiceUpsertWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.InvoiceUpsertWithoutInvoicePaymentInput> = z.object({
  update: z.union([ z.lazy(() => InvoiceUpdateWithoutInvoicePaymentInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutInvoicePaymentInputSchema) ]),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutInvoicePaymentInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema) ]),
  where: z.lazy(() => InvoiceWhereInputSchema).optional()
}).strict();

export default InvoiceUpsertWithoutInvoicePaymentInputSchema;
