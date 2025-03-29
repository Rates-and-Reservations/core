import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutBookingInputSchema } from './InvoiceCreateWithoutBookingInputSchema';
import { InvoiceUncheckedCreateWithoutBookingInputSchema } from './InvoiceUncheckedCreateWithoutBookingInputSchema';
import { InvoiceCreateOrConnectWithoutBookingInputSchema } from './InvoiceCreateOrConnectWithoutBookingInputSchema';
import { InvoiceUpsertWithWhereUniqueWithoutBookingInputSchema } from './InvoiceUpsertWithWhereUniqueWithoutBookingInputSchema';
import { InvoiceCreateManyBookingInputEnvelopeSchema } from './InvoiceCreateManyBookingInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithWhereUniqueWithoutBookingInputSchema } from './InvoiceUpdateWithWhereUniqueWithoutBookingInputSchema';
import { InvoiceUpdateManyWithWhereWithoutBookingInputSchema } from './InvoiceUpdateManyWithWhereWithoutBookingInputSchema';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';

export const InvoiceUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.InvoiceUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutBookingInputSchema),z.lazy(() => InvoiceCreateWithoutBookingInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutBookingInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutBookingInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => InvoiceUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => InvoiceUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvoiceUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => InvoiceUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvoiceScalarWhereInputSchema),z.lazy(() => InvoiceScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default InvoiceUpdateManyWithoutBookingNestedInputSchema;
