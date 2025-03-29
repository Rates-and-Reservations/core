import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountScalarWhereInputSchema } from './DiscountScalarWhereInputSchema';
import { DiscountUpdateManyMutationInputSchema } from './DiscountUpdateManyMutationInputSchema';
import { DiscountUncheckedUpdateManyWithoutAppliesToRatesInputSchema } from './DiscountUncheckedUpdateManyWithoutAppliesToRatesInputSchema';

export const DiscountUpdateManyWithWhereWithoutAppliesToRatesInputSchema: z.ZodType<Prisma.DiscountUpdateManyWithWhereWithoutAppliesToRatesInput> = z.object({
  where: z.lazy(() => DiscountScalarWhereInputSchema),
  data: z.union([ z.lazy(() => DiscountUpdateManyMutationInputSchema),z.lazy(() => DiscountUncheckedUpdateManyWithoutAppliesToRatesInputSchema) ]),
}).strict();

export default DiscountUpdateManyWithWhereWithoutAppliesToRatesInputSchema;
