import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceCreateWithoutBookingInputSchema } from './InvoiceCreateWithoutBookingInputSchema';
import { InvoiceUncheckedCreateWithoutBookingInputSchema } from './InvoiceUncheckedCreateWithoutBookingInputSchema';
import { InvoiceCreateOrConnectWithoutBookingInputSchema } from './InvoiceCreateOrConnectWithoutBookingInputSchema';
import { InvoiceCreateManyBookingInputEnvelopeSchema } from './InvoiceCreateManyBookingInputEnvelopeSchema';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';

export const InvoiceUncheckedCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.InvoiceUncheckedCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => InvoiceCreateWithoutBookingInputSchema),z.lazy(() => InvoiceCreateWithoutBookingInputSchema).array(),z.lazy(() => InvoiceUncheckedCreateWithoutBookingInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvoiceCreateOrConnectWithoutBookingInputSchema),z.lazy(() => InvoiceCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvoiceCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvoiceWhereUniqueInputSchema),z.lazy(() => InvoiceWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default InvoiceUncheckedCreateNestedManyWithoutBookingInputSchema;
