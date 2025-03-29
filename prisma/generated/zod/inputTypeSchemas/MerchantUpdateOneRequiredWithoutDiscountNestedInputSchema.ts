import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutDiscountInputSchema } from './MerchantCreateWithoutDiscountInputSchema';
import { MerchantUncheckedCreateWithoutDiscountInputSchema } from './MerchantUncheckedCreateWithoutDiscountInputSchema';
import { MerchantCreateOrConnectWithoutDiscountInputSchema } from './MerchantCreateOrConnectWithoutDiscountInputSchema';
import { MerchantUpsertWithoutDiscountInputSchema } from './MerchantUpsertWithoutDiscountInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutDiscountInputSchema } from './MerchantUpdateToOneWithWhereWithoutDiscountInputSchema';
import { MerchantUpdateWithoutDiscountInputSchema } from './MerchantUpdateWithoutDiscountInputSchema';
import { MerchantUncheckedUpdateWithoutDiscountInputSchema } from './MerchantUncheckedUpdateWithoutDiscountInputSchema';

export const MerchantUpdateOneRequiredWithoutDiscountNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutDiscountNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutDiscountInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutDiscountInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutDiscountInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutDiscountInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutDiscountInputSchema),z.lazy(() => MerchantUpdateWithoutDiscountInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutDiscountInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutDiscountNestedInputSchema;
