import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceScalarWhereInputSchema } from './InvoiceScalarWhereInputSchema';
import { InvoiceUpdateManyMutationInputSchema } from './InvoiceUpdateManyMutationInputSchema';
import { InvoiceUncheckedUpdateManyWithoutMerchantInputSchema } from './InvoiceUncheckedUpdateManyWithoutMerchantInputSchema';

export const InvoiceUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.InvoiceUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => InvoiceScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvoiceUpdateManyMutationInputSchema),z.lazy(() => InvoiceUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default InvoiceUpdateManyWithWhereWithoutMerchantInputSchema;
