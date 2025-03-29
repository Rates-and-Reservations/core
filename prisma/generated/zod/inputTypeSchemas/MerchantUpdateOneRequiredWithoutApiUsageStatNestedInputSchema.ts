import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutApiUsageStatInputSchema } from './MerchantCreateWithoutApiUsageStatInputSchema';
import { MerchantUncheckedCreateWithoutApiUsageStatInputSchema } from './MerchantUncheckedCreateWithoutApiUsageStatInputSchema';
import { MerchantCreateOrConnectWithoutApiUsageStatInputSchema } from './MerchantCreateOrConnectWithoutApiUsageStatInputSchema';
import { MerchantUpsertWithoutApiUsageStatInputSchema } from './MerchantUpsertWithoutApiUsageStatInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutApiUsageStatInputSchema } from './MerchantUpdateToOneWithWhereWithoutApiUsageStatInputSchema';
import { MerchantUpdateWithoutApiUsageStatInputSchema } from './MerchantUpdateWithoutApiUsageStatInputSchema';
import { MerchantUncheckedUpdateWithoutApiUsageStatInputSchema } from './MerchantUncheckedUpdateWithoutApiUsageStatInputSchema';

export const MerchantUpdateOneRequiredWithoutApiUsageStatNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutApiUsageStatNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiUsageStatInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiUsageStatInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutApiUsageStatInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutApiUsageStatInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutApiUsageStatInputSchema),z.lazy(() => MerchantUpdateWithoutApiUsageStatInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiUsageStatInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutApiUsageStatNestedInputSchema;
