import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithoutMerchantInputSchema } from './InvoiceUpdateWithoutMerchantInputSchema';
import { InvoiceUncheckedUpdateWithoutMerchantInputSchema } from './InvoiceUncheckedUpdateWithoutMerchantInputSchema';

export const InvoiceUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.InvoiceUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvoiceUpdateWithoutMerchantInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default InvoiceUpdateWithWhereUniqueWithoutMerchantInputSchema;
