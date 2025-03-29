import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutMerchantInputSchema } from './CustomerCreateWithoutMerchantInputSchema';
import { CustomerUncheckedCreateWithoutMerchantInputSchema } from './CustomerUncheckedCreateWithoutMerchantInputSchema';

export const CustomerCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutMerchantInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default CustomerCreateOrConnectWithoutMerchantInputSchema;
