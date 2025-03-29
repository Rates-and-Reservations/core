import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountCreateWithoutAppliesToRatesInputSchema } from './DiscountCreateWithoutAppliesToRatesInputSchema';
import { DiscountUncheckedCreateWithoutAppliesToRatesInputSchema } from './DiscountUncheckedCreateWithoutAppliesToRatesInputSchema';
import { DiscountCreateOrConnectWithoutAppliesToRatesInputSchema } from './DiscountCreateOrConnectWithoutAppliesToRatesInputSchema';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';

export const DiscountUncheckedCreateNestedManyWithoutAppliesToRatesInputSchema: z.ZodType<Prisma.DiscountUncheckedCreateNestedManyWithoutAppliesToRatesInput> = z.object({
  create: z.union([ z.lazy(() => DiscountCreateWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountCreateWithoutAppliesToRatesInputSchema).array(),z.lazy(() => DiscountUncheckedCreateWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutAppliesToRatesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DiscountCreateOrConnectWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountCreateOrConnectWithoutAppliesToRatesInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default DiscountUncheckedCreateNestedManyWithoutAppliesToRatesInputSchema;
