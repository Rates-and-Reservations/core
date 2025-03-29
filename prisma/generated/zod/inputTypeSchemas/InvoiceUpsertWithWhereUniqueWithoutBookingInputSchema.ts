import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithoutBookingInputSchema } from './InvoiceUpdateWithoutBookingInputSchema';
import { InvoiceUncheckedUpdateWithoutBookingInputSchema } from './InvoiceUncheckedUpdateWithoutBookingInputSchema';
import { InvoiceCreateWithoutBookingInputSchema } from './InvoiceCreateWithoutBookingInputSchema';
import { InvoiceUncheckedCreateWithoutBookingInputSchema } from './InvoiceUncheckedCreateWithoutBookingInputSchema';

export const InvoiceUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvoiceUpdateWithoutBookingInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutBookingInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default InvoiceUpsertWithWhereUniqueWithoutBookingInputSchema;
