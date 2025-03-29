import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountCreateWithoutMerchantInputSchema } from './DiscountCreateWithoutMerchantInputSchema';
import { DiscountUncheckedCreateWithoutMerchantInputSchema } from './DiscountUncheckedCreateWithoutMerchantInputSchema';

export const DiscountCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DiscountCreateWithoutMerchantInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default DiscountCreateOrConnectWithoutMerchantInputSchema;
