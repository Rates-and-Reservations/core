import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutInvoiceInputSchema } from './MerchantUpdateWithoutInvoiceInputSchema';
import { MerchantUncheckedUpdateWithoutInvoiceInputSchema } from './MerchantUncheckedUpdateWithoutInvoiceInputSchema';
import { MerchantCreateWithoutInvoiceInputSchema } from './MerchantCreateWithoutInvoiceInputSchema';
import { MerchantUncheckedCreateWithoutInvoiceInputSchema } from './MerchantUncheckedCreateWithoutInvoiceInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutInvoiceInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutInvoiceInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutInvoiceInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutInvoiceInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutInvoiceInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutInvoiceInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutInvoiceInputSchema;
