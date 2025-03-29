import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutInvoiceInputSchema } from './CustomerUpdateWithoutInvoiceInputSchema';
import { CustomerUncheckedUpdateWithoutInvoiceInputSchema } from './CustomerUncheckedUpdateWithoutInvoiceInputSchema';
import { CustomerCreateWithoutInvoiceInputSchema } from './CustomerCreateWithoutInvoiceInputSchema';
import { CustomerUncheckedCreateWithoutInvoiceInputSchema } from './CustomerUncheckedCreateWithoutInvoiceInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutInvoiceInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutInvoiceInput> = z.object({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutInvoiceInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutInvoiceInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutInvoiceInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutInvoiceInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerUpsertWithoutInvoiceInputSchema;
