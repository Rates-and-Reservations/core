import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';
import { InvoicePaymentUpdateWithoutPaymentInputSchema } from './InvoicePaymentUpdateWithoutPaymentInputSchema';
import { InvoicePaymentUncheckedUpdateWithoutPaymentInputSchema } from './InvoicePaymentUncheckedUpdateWithoutPaymentInputSchema';
import { InvoicePaymentCreateWithoutPaymentInputSchema } from './InvoicePaymentCreateWithoutPaymentInputSchema';
import { InvoicePaymentUncheckedCreateWithoutPaymentInputSchema } from './InvoicePaymentUncheckedCreateWithoutPaymentInputSchema';

export const InvoicePaymentUpsertWithWhereUniqueWithoutPaymentInputSchema: z.ZodType<Prisma.InvoicePaymentUpsertWithWhereUniqueWithoutPaymentInput> = z.object({
  where: z.lazy(() => InvoicePaymentWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvoicePaymentUpdateWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUncheckedUpdateWithoutPaymentInputSchema) ]),
  create: z.union([ z.lazy(() => InvoicePaymentCreateWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUncheckedCreateWithoutPaymentInputSchema) ]),
}).strict();

export default InvoicePaymentUpsertWithWhereUniqueWithoutPaymentInputSchema;
