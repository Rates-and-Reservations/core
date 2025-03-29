import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutCustomerInputSchema } from './MerchantUpdateWithoutCustomerInputSchema';
import { MerchantUncheckedUpdateWithoutCustomerInputSchema } from './MerchantUncheckedUpdateWithoutCustomerInputSchema';
import { MerchantCreateWithoutCustomerInputSchema } from './MerchantCreateWithoutCustomerInputSchema';
import { MerchantUncheckedCreateWithoutCustomerInputSchema } from './MerchantUncheckedCreateWithoutCustomerInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutCustomerInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutCustomerInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutCustomerInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutCustomerInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutCustomerInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutCustomerInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutCustomerInputSchema;
