import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateWithoutMerchantInputSchema } from './CustomerUpdateWithoutMerchantInputSchema';
import { CustomerUncheckedUpdateWithoutMerchantInputSchema } from './CustomerUncheckedUpdateWithoutMerchantInputSchema';

export const CustomerUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.CustomerUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutMerchantInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default CustomerUpdateWithWhereUniqueWithoutMerchantInputSchema;
