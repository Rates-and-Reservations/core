import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutInvoiceInputSchema } from './CustomerCreateWithoutInvoiceInputSchema';
import { CustomerUncheckedCreateWithoutInvoiceInputSchema } from './CustomerUncheckedCreateWithoutInvoiceInputSchema';
import { CustomerCreateOrConnectWithoutInvoiceInputSchema } from './CustomerCreateOrConnectWithoutInvoiceInputSchema';
import { CustomerUpsertWithoutInvoiceInputSchema } from './CustomerUpsertWithoutInvoiceInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutInvoiceInputSchema } from './CustomerUpdateToOneWithWhereWithoutInvoiceInputSchema';
import { CustomerUpdateWithoutInvoiceInputSchema } from './CustomerUpdateWithoutInvoiceInputSchema';
import { CustomerUncheckedUpdateWithoutInvoiceInputSchema } from './CustomerUncheckedUpdateWithoutInvoiceInputSchema';

export const CustomerUpdateOneWithoutInvoiceNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutInvoiceNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutInvoiceInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutInvoiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutInvoiceInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutInvoiceInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutInvoiceInputSchema),z.lazy(() => CustomerUpdateWithoutInvoiceInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutInvoiceInputSchema) ]).optional(),
}).strict();

export default CustomerUpdateOneWithoutInvoiceNestedInputSchema;
