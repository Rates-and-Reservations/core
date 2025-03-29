import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentCreateWithoutPaymentInputSchema } from './InvoicePaymentCreateWithoutPaymentInputSchema';
import { InvoicePaymentUncheckedCreateWithoutPaymentInputSchema } from './InvoicePaymentUncheckedCreateWithoutPaymentInputSchema';
import { InvoicePaymentCreateOrConnectWithoutPaymentInputSchema } from './InvoicePaymentCreateOrConnectWithoutPaymentInputSchema';
import { InvoicePaymentCreateManyPaymentInputEnvelopeSchema } from './InvoicePaymentCreateManyPaymentInputEnvelopeSchema';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';

export const InvoicePaymentCreateNestedManyWithoutPaymentInputSchema: z.ZodType<Prisma.InvoicePaymentCreateNestedManyWithoutPaymentInput> = z.object({
  create: z.union([ z.lazy(() => InvoicePaymentCreateWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentCreateWithoutPaymentInputSchema).array(),z.lazy(() => InvoicePaymentUncheckedCreateWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUncheckedCreateWithoutPaymentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoicePaymentCreateOrConnectWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentCreateOrConnectWithoutPaymentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoicePaymentCreateManyPaymentInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InvoicePaymentCreateNestedManyWithoutPaymentInputSchema;
