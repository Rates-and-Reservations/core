import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceCreateWithoutBookingInputSchema } from './InvoiceCreateWithoutBookingInputSchema';
import { InvoiceUncheckedCreateWithoutBookingInputSchema } from './InvoiceUncheckedCreateWithoutBookingInputSchema';

export const InvoiceCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutBookingInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default InvoiceCreateOrConnectWithoutBookingInputSchema;
