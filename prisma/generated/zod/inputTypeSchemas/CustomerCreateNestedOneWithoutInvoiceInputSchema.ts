import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutInvoiceInputSchema } from './CustomerCreateWithoutInvoiceInputSchema';
import { CustomerUncheckedCreateWithoutInvoiceInputSchema } from './CustomerUncheckedCreateWithoutInvoiceInputSchema';
import { CustomerCreateOrConnectWithoutInvoiceInputSchema } from './CustomerCreateOrConnectWithoutInvoiceInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutInvoiceInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutInvoiceInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutInvoiceInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutInvoiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutInvoiceInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
}).strict();

export default CustomerCreateNestedOneWithoutInvoiceInputSchema;
