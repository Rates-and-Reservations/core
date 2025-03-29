import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';
import { InvoiceUpdateManyMutationInputSchema } from './InvoiceUpdateManyMutationInputSchema';
import { InvoiceUncheckedUpdateManyWithoutBookingInputSchema } from './InvoiceUncheckedUpdateManyWithoutBookingInputSchema';

export const InvoiceUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => InvoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvoiceUpdateManyMutationInputSchema),z.lazy(() => InvoiceUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export default InvoiceUpdateManyWithWhereWithoutBookingInputSchema;
