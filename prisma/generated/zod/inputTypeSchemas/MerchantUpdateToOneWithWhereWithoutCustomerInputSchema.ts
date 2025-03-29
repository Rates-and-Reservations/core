import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';
import { MerchantUpdateWithoutCustomerInputSchema } from './MerchantUpdateWithoutCustomerInputSchema';
import { MerchantUncheckedUpdateWithoutCustomerInputSchema } from './MerchantUncheckedUpdateWithoutCustomerInputSchema';

export const MerchantUpdateToOneWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.MerchantUpdateToOneWithWhereWithoutCustomerInput> = z.object({
  where: z.lazy(() => MerchantWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => MerchantUpdateWithoutCustomerInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default MerchantUpdateToOneWithWhereWithoutCustomerInputSchema;
