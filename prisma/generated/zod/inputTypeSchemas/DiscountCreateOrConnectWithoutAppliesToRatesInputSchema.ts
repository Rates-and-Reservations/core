import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountCreateWithoutAppliesToRatesInputSchema } from './DiscountCreateWithoutAppliesToRatesInputSchema';
import { DiscountUncheckedCreateWithoutAppliesToRatesInputSchema } from './DiscountUncheckedCreateWithoutAppliesToRatesInputSchema';

export const DiscountCreateOrConnectWithoutAppliesToRatesInputSchema: z.ZodType<Prisma.DiscountCreateOrConnectWithoutAppliesToRatesInput> = z.object({
  where: z.lazy(() => DiscountWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => DiscountCreateWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutAppliesToRatesInputSchema) ]),
}).strict();

export default DiscountCreateOrConnectWithoutAppliesToRatesInputSchema;
