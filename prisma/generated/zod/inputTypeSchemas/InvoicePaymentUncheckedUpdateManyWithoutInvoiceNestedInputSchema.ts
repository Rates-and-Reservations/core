import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentCreateWithoutInvoiceInputSchema } from './InvoicePaymentCreateWithoutInvoiceInputSchema';
import { InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema } from './InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema';
import { InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema } from './InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema';
import { InvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputSchema } from './InvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputSchema';
import { InvoicePaymentCreateManyInvoiceInputEnvelopeSchema } from './InvoicePaymentCreateManyInvoiceInputEnvelopeSchema';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';
import { InvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputSchema } from './InvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputSchema';
import { InvoicePaymentUpdateManyWithWhereWithoutInvoiceInputSchema } from './InvoicePaymentUpdateManyWithWhereWithoutInvoiceInputSchema';
import { InvoicePaymentScalarWhereInputSchema } from './InvoicePaymentScalarWhereInputSchema';

export const InvoicePaymentUncheckedUpdateManyWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.InvoicePaymentUncheckedUpdateManyWithoutInvoiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoicePaymentCreateWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentCreateWithoutInvoiceInputSchema).array(),z.lazy(() => InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUncheckedCreateWithoutInvoiceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentCreateOrConnectWithoutInvoiceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUpsertWithWhereUniqueWithoutInvoiceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoicePaymentCreateManyInvoiceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUpdateWithWhereUniqueWithoutInvoiceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoicePaymentUpdateManyWithWhereWithoutInvoiceInputSchema),z.lazy(() => InvoicePaymentUpdateManyWithWhereWithoutInvoiceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoicePaymentScalarWhereInputSchema),z.lazy(() => InvoicePaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoicePaymentUncheckedUpdateManyWithoutInvoiceNestedInputSchema;
