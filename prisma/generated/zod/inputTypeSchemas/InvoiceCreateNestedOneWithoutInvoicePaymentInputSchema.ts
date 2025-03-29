import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutInvoicePaymentInputSchema } from './InvoiceCreateWithoutInvoicePaymentInputSchema';
import { InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema } from './InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema';
import { InvoiceCreateOrConnectWithoutInvoicePaymentInputSchema } from './InvoiceCreateOrConnectWithoutInvoicePaymentInputSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';

export const InvoiceCreateNestedOneWithoutInvoicePaymentInputSchema: z.ZodType<Prisma.InvoiceCreateNestedOneWithoutInvoicePaymentInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutInvoicePaymentInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutInvoicePaymentInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InvoiceCreateOrConnectWithoutInvoicePaymentInputSchema).optional(),
  connect: z.lazy(() => InvoiceWhereUniqueInputSchema).optional()
}).strict();

export default InvoiceCreateNestedOneWithoutInvoicePaymentInputSchema;
