import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceUpdateWithoutMerchantInputSchema } from './InvoiceUpdateWithoutMerchantInputSchema';
import { InvoiceUncheckedUpdateWithoutMerchantInputSchema } from './InvoiceUncheckedUpdateWithoutMerchantInputSchema';
import { InvoiceCreateWithoutMerchantInputSchema } from './InvoiceCreateWithoutMerchantInputSchema';
import { InvoiceUncheckedCreateWithoutMerchantInputSchema } from './InvoiceUncheckedCreateWithoutMerchantInputSchema';

export const InvoiceUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.InvoiceUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvoiceUpdateWithoutMerchantInputSchema),z.lazy(() => InvoiceUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutMerchantInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default InvoiceUpsertWithWhereUniqueWithoutMerchantInputSchema;
