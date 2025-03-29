import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountCreateWithoutAppliesToRatesInputSchema } from './DiscountCreateWithoutAppliesToRatesInputSchema';
import { DiscountUncheckedCreateWithoutAppliesToRatesInputSchema } from './DiscountUncheckedCreateWithoutAppliesToRatesInputSchema';
import { DiscountCreateOrConnectWithoutAppliesToRatesInputSchema } from './DiscountCreateOrConnectWithoutAppliesToRatesInputSchema';
import { DiscountUpsertWithWhereUniqueWithoutAppliesToRatesInputSchema } from './DiscountUpsertWithWhereUniqueWithoutAppliesToRatesInputSchema';
import { DiscountWhereUniqueInputSchema } from './DiscountWhereUniqueInputSchema';
import { DiscountUpdateWithWhereUniqueWithoutAppliesToRatesInputSchema } from './DiscountUpdateWithWhereUniqueWithoutAppliesToRatesInputSchema';
import { DiscountUpdateManyWithWhereWithoutAppliesToRatesInputSchema } from './DiscountUpdateManyWithWhereWithoutAppliesToRatesInputSchema';
import { DiscountScalarWhereInputSchema } from './DiscountScalarWhereInputSchema';

export const DiscountUncheckedUpdateManyWithoutAppliesToRatesNestedInputSchema: z.ZodType<Prisma.DiscountUncheckedUpdateManyWithoutAppliesToRatesNestedInput> = z.object({
  create: z.union([ z.lazy(() => DiscountCreateWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountCreateWithoutAppliesToRatesInputSchema).array(),z.lazy(() => DiscountUncheckedCreateWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUncheckedCreateWithoutAppliesToRatesInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => DiscountCreateOrConnectWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountCreateOrConnectWithoutAppliesToRatesInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => DiscountUpsertWithWhereUniqueWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUpsertWithWhereUniqueWithoutAppliesToRatesInputSchema).array() ]).optional(),
  set: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => DiscountWhereUniqueInputSchema),z.lazy(() => DiscountWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => DiscountUpdateWithWhereUniqueWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUpdateWithWhereUniqueWithoutAppliesToRatesInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => DiscountUpdateManyWithWhereWithoutAppliesToRatesInputSchema),z.lazy(() => DiscountUpdateManyWithWhereWithoutAppliesToRatesInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => DiscountScalarWhereInputSchema),z.lazy(() => DiscountScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default DiscountUncheckedUpdateManyWithoutAppliesToRatesNestedInputSchema;
