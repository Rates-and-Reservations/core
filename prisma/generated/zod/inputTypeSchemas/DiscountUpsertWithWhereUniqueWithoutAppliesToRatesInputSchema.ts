import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountUpdateWithoutAppliesToRatesInputSchema } from './DiscountUpdateWithoutAppliesToRatesInputSchema';
import { DiscountUncheckedUpdateWithoutAppliesToRatesInputSchema } from './DiscountUncheckedUpdateWithoutAppliesToRatesInputSchema';
import { DiscountCreateWithoutAppliesToRatesInputSchema } from './DiscountCreateWithoutAppliesToRatesInputSchema';
import { DiscountUncheckedCreateWithoutAppliesToRatesInputSchema } from './DiscountUncheckedCreateWithoutAppliesToRatesInputSchema';

export const DiscountUpsertWithWhereUniqueWithoutAppliesToRatesInputSchema: z.ZodType<Prisma.DiscountUpsertWithWhereUniqueWithoutAppliesToRatesInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => DiscountUpdateWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUncheckedUpdateWithoutAppliesToRatesInputSchema) ]),
  create: z.union([ z.lazy(() => DiscountCreateWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutAppliesToRatesInputSchema) ]),
}).strict();

export default DiscountUpsertWithWhereUniqueWithoutAppliesToRatesInputSchema;
