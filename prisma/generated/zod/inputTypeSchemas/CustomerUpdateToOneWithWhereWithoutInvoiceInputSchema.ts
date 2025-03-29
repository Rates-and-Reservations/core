import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerUpdateWithoutInvoiceInputSchema } from './CustomerUpdateWithoutInvoiceInputSchema';
import { CustomerUncheckedUpdateWithoutInvoiceInputSchema } from './CustomerUncheckedUpdateWithoutInvoiceInputSchema';

export const CustomerUpdateToOneWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutInvoiceInput> = z.object({
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutInvoiceInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutInvoiceInputSchema) ]),
}).strict();

export default CustomerUpdateToOneWithWhereWithoutInvoiceInputSchema;
