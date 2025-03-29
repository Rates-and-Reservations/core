import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentScalarWhereInputSchema } from './InvoicePaymentScalarWhereInputSchema';
import { InvoicePaymentUpdateManyMutationInputSchema } from './InvoicePaymentUpdateManyMutationInputSchema';
import { InvoicePaymentUncheckedUpdateManyWithoutPaymentInputSchema } from './InvoicePaymentUncheckedUpdateManyWithoutPaymentInputSchema';

export const InvoicePaymentUpdateManyWithWhereWithoutPaymentInputSchema: z.ZodType<Prisma.InvoicePaymentUpdateManyWithWhereWithoutPaymentInput> = z.object({
  where: z.lazy(() => InvoicePaymentScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvoicePaymentUpdateManyMutationInputSchema),z.lazy(() => InvoicePaymentUncheckedUpdateManyWithoutPaymentInputSchema) ]),
}).strict();

export default InvoicePaymentUpdateManyWithWhereWithoutPaymentInputSchema;
