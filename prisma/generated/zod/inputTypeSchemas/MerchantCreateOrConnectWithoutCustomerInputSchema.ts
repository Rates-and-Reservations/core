import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutCustomerInputSchema } from './MerchantCreateWithoutCustomerInputSchema';
import { MerchantUncheckedCreateWithoutCustomerInputSchema } from './MerchantUncheckedCreateWithoutCustomerInputSchema';

export const MerchantCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutCustomerInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutCustomerInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutCustomerInputSchema;
