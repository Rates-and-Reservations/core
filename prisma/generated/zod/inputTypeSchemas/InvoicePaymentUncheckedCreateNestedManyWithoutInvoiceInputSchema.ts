import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentCreateWithoutInvoiceInputSchema } from './InvoicePaymentCreateWithoutInvoiceInputSchema';
import { InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema } from './InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema';
import { InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema } from './InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema';
import { InvoicePaymentCreateManyInvoiceInputEnvelopeSchema } from './InvoicePaymentCreateManyInvoiceInputEnvelopeSchema';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';

export const InvoicePaymentUncheckedCreateNestedManyWithoutInvoiceInputSchema: z.ZodType<Prisma.InvoicePaymentUncheckedCreateNestedManyWithoutInvoiceInput> = z.object({
  create: z.union([ z.lazy(() => InvoicePaymentCreateWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentCreateWithoutInvoiceInputSchema).array(),z.lazy(() => InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoicePaymentCreateManyInvoiceInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InvoicePaymentUncheckedCreateNestedManyWithoutInvoiceInputSchema;
