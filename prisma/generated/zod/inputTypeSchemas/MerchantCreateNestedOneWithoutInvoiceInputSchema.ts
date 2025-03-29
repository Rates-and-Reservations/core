import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutInvoiceInputSchema } from './MerchantCreateWithoutInvoiceInputSchema';
import { MerchantUncheckedCreateWithoutInvoiceInputSchema } from './MerchantUncheckedCreateWithoutInvoiceInputSchema';
import { MerchantCreateOrConnectWithoutInvoiceInputSchema } from './MerchantCreateOrConnectWithoutInvoiceInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutInvoiceInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutInvoiceInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutInvoiceInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutInvoiceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutInvoiceInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutInvoiceInputSchema;
