import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithoutCustomerInputSchema } from './InvoiceUpdateWithoutCustomerInputSchema';
import { InvoiceUncheckedUpdateWithoutCustomerInputSchema } from './InvoiceUncheckedUpdateWithoutCustomerInputSchema';

export const InvoiceUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoiceUpdateWithoutCustomerInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default InvoiceUpdateWithWhereUniqueWithoutCustomerInputSchema;
