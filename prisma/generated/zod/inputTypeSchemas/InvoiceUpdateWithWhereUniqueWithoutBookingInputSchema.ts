import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithoutBookingInputSchema } from './InvoiceUpdateWithoutBookingInputSchema';
import { InvoiceUncheckedUpdateWithoutBookingInputSchema } from './InvoiceUncheckedUpdateWithoutBookingInputSchema';

export const InvoiceUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoiceUpdateWithoutBookingInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default InvoiceUpdateWithWhereUniqueWithoutBookingInputSchema;
