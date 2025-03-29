import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutInvoiceInputSchema } from './CustomerCreateWithoutInvoiceInputSchema';
import { CustomerUncheckedCreateWithoutInvoiceInputSchema } from './CustomerUncheckedCreateWithoutInvoiceInputSchema';

export const CustomerCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutInvoiceInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutInvoiceInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutInvoiceInputSchema) ]),
}).strict();

export default CustomerCreateOrConnectWithoutInvoiceInputSchema;
