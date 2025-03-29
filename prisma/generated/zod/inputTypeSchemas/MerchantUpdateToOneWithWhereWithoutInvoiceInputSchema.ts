import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutInvoiceInputSchema } from './MerchantUpdateWithoutInvoiceInputSchema';
import { MerchantUncheckedUpdateWithoutInvoiceInputSchema } from './MerchantUncheckedUpdateWithoutInvoiceInputSchema';

export const MerchantUpdateToOneWithWhereWithoutInvoiceInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutInvoiceInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutInvoiceInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutInvoiceInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutInvoiceInputSchema;
