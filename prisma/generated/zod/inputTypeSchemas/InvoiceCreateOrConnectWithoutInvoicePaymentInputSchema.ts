import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceCreateWithoutInvoicePaymentInputSchema } from './InvoiceCreateWithoutInvoicePaymentInputSchema';
import { InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema } from './InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema';

export const InvoiceCreateOrConnectWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutInvoicePaymentInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutInvoicePaymentInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema) ]),
}).strict();

export default InvoiceCreateOrConnectWithoutInvoicePaymentInputSchema;
