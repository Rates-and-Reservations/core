import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';
import { InvoicePaymentCreateWithoutPaymentInputSchema } from './InvoicePaymentCreateWithoutPaymentInputSchema';
import { InvoicePaymentUncheckedCreateWithoutPaymentInputSchema } from './InvoicePaymentUncheckedCreateWithoutPaymentInputSchema';

export const InvoicePaymentCreateOrConnectWithoutPaymentInputSchema: z.ZodType<Prisma.InvoicePaymentCreateOrConnectWithoutPaymentInput> = z.object({
  where: z.lazy(() => InvoicePaymentWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoicePaymentCreateWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUncheckedCreateWithoutPaymentInputSchema) ]),
}).strict();

export default InvoicePaymentCreateOrConnectWithoutPaymentInputSchema;
