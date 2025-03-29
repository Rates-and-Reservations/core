import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountUpdateWithoutMerchantInputSchema } from './DiscountUpdateWithoutMerchantInputSchema';
import { DiscountUncheckedUpdateWithoutMerchantInputSchema } from './DiscountUncheckedUpdateWithoutMerchantInputSchema';
import { DiscountCreateWithoutMerchantInputSchema } from './DiscountCreateWithoutMerchantInputSchema';
import { DiscountUncheckedCreateWithoutMerchantInputSchema } from './DiscountUncheckedCreateWithoutMerchantInputSchema';

export const DiscountUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.DiscountUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DiscountUpdateWithoutMerchantInputSchema),z.lazy(() => DiscountUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => DiscountCreateWithoutMerchantInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default DiscountUpsertWithWhereUniqueWithoutMerchantInputSchema;
