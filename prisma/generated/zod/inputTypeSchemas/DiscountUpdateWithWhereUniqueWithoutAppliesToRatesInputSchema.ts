import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountUpdateWithoutAppliesToRatesInputSchema } from './DiscountUpdateWithoutAppliesToRatesInputSchema';
import { DiscountUncheckedUpdateWithoutAppliesToRatesInputSchema } from './DiscountUncheckedUpdateWithoutAppliesToRatesInputSchema';

export const DiscountUpdateWithWhereUniqueWithoutAppliesToRatesInputSchema: z.ZodType<Prisma.DiscountUpdateWithWhereUniqueWithoutAppliesToRatesInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => DiscountUpdateWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUncheckedUpdateWithoutAppliesToRatesInputSchema) ]),
}).strict();

export default DiscountUpdateWithWhereUniqueWithoutAppliesToRatesInputSchema;
