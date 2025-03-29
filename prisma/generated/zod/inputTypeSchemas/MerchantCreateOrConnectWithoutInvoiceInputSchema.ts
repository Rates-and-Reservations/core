import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutInvoiceInputSchema } from './MerchantCreateWithoutInvoiceInputSchema';
import { MerchantUncheckedCreateWithoutInvoiceInputSchema } from './MerchantUncheckedCreateWithoutInvoiceInputSchema';

export const MerchantCreateOrConnectWithoutInvoiceInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutInvoiceInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutInvoiceInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutInvoiceInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutInvoiceInputSchema;
