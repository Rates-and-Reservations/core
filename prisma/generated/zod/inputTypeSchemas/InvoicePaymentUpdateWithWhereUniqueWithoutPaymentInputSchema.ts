import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';
import { InvoicePaymentUpdateWithoutPaymentInputSchema } from './InvoicePaymentUpdateWithoutPaymentInputSchema';
import { InvoicePaymentUncheckedUpdateWithoutPaymentInputSchema } from './InvoicePaymentUncheckedUpdateWithoutPaymentInputSchema';

export const InvoicePaymentUpdateWithWhereUniqueWithoutPaymentInputSchema: z.ZodType<Prisma.InvoicePaymentUpdateWithWhereUniqueWithoutPaymentInput> = z.object({
  where: z.lazy(() => InvoicePaymentWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoicePaymentUpdateWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUncheckedUpdateWithoutPaymentInputSchema) ]),
}).strict();

export default InvoicePaymentUpdateWithWhereUniqueWithoutPaymentInputSchema;
