import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutAddOnInputSchema } from './MerchantCreateWithoutAddOnInputSchema';
import { MerchantUncheckedCreateWithoutAddOnInputSchema } from './MerchantUncheckedCreateWithoutAddOnInputSchema';
import { MerchantCreateOrConnectWithoutAddOnInputSchema } from './MerchantCreateOrConnectWithoutAddOnInputSchema';
import { MerchantUpsertWithoutAddOnInputSchema } from './MerchantUpsertWithoutAddOnInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutAddOnInputSchema } from './MerchantUpdateToOneWithWhereWithoutAddOnInputSchema';
import { MerchantUpdateWithoutAddOnInputSchema } from './MerchantUpdateWithoutAddOnInputSchema';
import { MerchantUncheckedUpdateWithoutAddOnInputSchema } from './MerchantUncheckedUpdateWithoutAddOnInputSchema';

export const MerchantUpdateOneRequiredWithoutAddOnNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutAddOnNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutAddOnInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutAddOnInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutAddOnInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutAddOnInputSchema),z.lazy(() => MerchantUpdateWithoutAddOnInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutAddOnInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutAddOnNestedInputSchema;
