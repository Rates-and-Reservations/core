import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountScalarWhereInputSchema } from './DiscountScalarWhereInputSchema';
import { DiscountUpdateManyMutationInputSchema } from './DiscountUpdateManyMutationInputSchema';
import { DiscountUncheckedUpdateManyWithoutMerchantInputSchema } from './DiscountUncheckedUpdateManyWithoutMerchantInputSchema';

export const DiscountUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.DiscountUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => DiscountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DiscountUpdateManyMutationInputSchema),z.lazy(() => DiscountUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default DiscountUpdateManyWithWhereWithoutMerchantInputSchema;
