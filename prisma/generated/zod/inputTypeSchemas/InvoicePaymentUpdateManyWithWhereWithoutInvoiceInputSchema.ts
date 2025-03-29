import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentScalarWhereInputSchema } from './InvoicePaymentScalarWhereInputSchema';
import { InvoicePaymentUpdateManyMutationInputSchema } from './InvoicePaymentUpdateManyMutationInputSchema';
import { InvoicePaymentUncheckedUpdateManyWithoutInvoiceInputSchema } from './InvoicePaymentUncheckedUpdateManyWithoutInvoiceInputSchema';

export const InvoicePaymentUpdateManyWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoicePaymentUpdateManyWithWhereWithoutInvoiceInput> = z.object({
  where: z.lazy(() => InvoicePaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvoicePaymentUpdateManyMutationInputSchema),z.lazy(() => InvoicePaymentUncheckedUpdateManyWithoutInvoiceInputSchema) ]),
}).strict();

export default InvoicePaymentUpdateManyWithWhereWithoutInvoiceInputSchema;
