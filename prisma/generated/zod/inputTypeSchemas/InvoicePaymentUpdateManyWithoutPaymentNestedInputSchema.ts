import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoicePaymentCreateWithoutPaymentInputSchema } from './InvoicePaymentCreateWithoutPaymentInputSchema';
import { InvoicePaymentUncheckedCreateWithoutPaymentInputSchema } from './InvoicePaymentUncheckedCreateWithoutPaymentInputSchema';
import { InvoicePaymentCreateOrConnectWithoutPaymentInputSchema } from './InvoicePaymentCreateOrConnectWithoutPaymentInputSchema';
import { InvoicePaymentUpsertWithWhereUniqueWithoutPaymentInputSchema } from './InvoicePaymentUpsertWithWhereUniqueWithoutPaymentInputSchema';
import { InvoicePaymentCreateManyPaymentInputEnvelopeSchema } from './InvoicePaymentCreateManyPaymentInputEnvelopeSchema';
import { InvoicePaymentWhereUniqueInputSchema } from './InvoicePaymentWhereUniqueInputSchema';
import { InvoicePaymentUpdateWithWhereUniqueWithoutPaymentInputSchema } from './InvoicePaymentUpdateWithWhereUniqueWithoutPaymentInputSchema';
import { InvoicePaymentUpdateManyWithWhereWithoutPaymentInputSchema } from './InvoicePaymentUpdateManyWithWhereWithoutPaymentInputSchema';
import { InvoicePaymentScalarWhereInputSchema } from './InvoicePaymentScalarWhereInputSchema';

export const InvoicePaymentUpdateManyWithoutPaymentNestedInputSchema: z.ZodType<Prisma.InvoicePaymentUpdateManyWithoutPaymentNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoicePaymentCreateWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentCreateWithoutPaymentInputSchema).array(),z.lazy(() => InvoicePaymentUncheckedCreateWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUncheckedCreateWithoutPaymentInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoicePaymentCreateOrConnectWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentCreateOrConnectWithoutPaymentInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoicePaymentUpsertWithWhereUniqueWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUpsertWithWhereUniqueWithoutPaymentInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoicePaymentCreateManyPaymentInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoicePaymentWhereUniqueInputSchema),z.lazy(() => InvoicePaymentWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoicePaymentUpdateWithWhereUniqueWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUpdateWithWhereUniqueWithoutPaymentInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoicePaymentUpdateManyWithWhereWithoutPaymentInputSchema),z.lazy(() => InvoicePaymentUpdateManyWithWhereWithoutPaymentInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoicePaymentScalarWhereInputSchema),z.lazy(() => InvoicePaymentScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoicePaymentUpdateManyWithoutPaymentNestedInputSchema;
