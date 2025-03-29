import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerScalarWhereInputSchema } from './CustomerScalarWhereInputSchema';
import { CustomerUpdateManyMutationInputSchema } from './CustomerUpdateManyMutationInputSchema';
import { CustomerUncheckedUpdateManyWithoutMerchantInputSchema } from './CustomerUncheckedUpdateManyWithoutMerchantInputSchema';

export const CustomerUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.CustomerUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => CustomerScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CustomerUpdateManyMutationInputSchema),z.lazy(() => CustomerUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default CustomerUpdateManyWithWhereWithoutMerchantInputSchema;
