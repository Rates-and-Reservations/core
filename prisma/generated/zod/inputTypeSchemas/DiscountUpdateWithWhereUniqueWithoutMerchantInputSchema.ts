import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountUpdateWithoutMerchantInputSchema } from './DiscountUpdateWithoutMerchantInputSchema';
import { DiscountUncheckedUpdateWithoutMerchantInputSchema } from './DiscountUncheckedUpdateWithoutMerchantInputSchema';

export const DiscountUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.DiscountUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DiscountUpdateWithoutMerchantInputSchema),z.lazy(() => DiscountUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default DiscountUpdateWithWhereUniqueWithoutMerchantInputSchema;
