import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceWhereUniqueInputSchema } from './InvoiceWhereUniqueInputSchema';
import { InvoiceCreateWithoutMerchantInputSchema } from './InvoiceCreateWithoutMerchantInputSchema';
import { InvoiceUncheckedCreateWithoutMerchantInputSchema } from './InvoiceUncheckedCreateWithoutMerchantInputSchema';

export const InvoiceCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.InvoiceCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => InvoiceWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvoiceCreateWithoutMerchantInputSchema),z.lazy(() => InvoiceUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default InvoiceCreateOrConnectWithoutMerchantInputSchema;
