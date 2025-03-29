import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutApiUsageLogInputSchema } from './MerchantCreateWithoutApiUsageLogInputSchema';
import { MerchantUncheckedCreateWithoutApiUsageLogInputSchema } from './MerchantUncheckedCreateWithoutApiUsageLogInputSchema';
import { MerchantCreateOrConnectWithoutApiUsageLogInputSchema } from './MerchantCreateOrConnectWithoutApiUsageLogInputSchema';
import { MerchantUpsertWithoutApiUsageLogInputSchema } from './MerchantUpsertWithoutApiUsageLogInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutApiUsageLogInputSchema } from './MerchantUpdateToOneWithWhereWithoutApiUsageLogInputSchema';
import { MerchantUpdateWithoutApiUsageLogInputSchema } from './MerchantUpdateWithoutApiUsageLogInputSchema';
import { MerchantUncheckedUpdateWithoutApiUsageLogInputSchema } from './MerchantUncheckedUpdateWithoutApiUsageLogInputSchema';

export const MerchantUpdateOneRequiredWithoutApiUsageLogNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutApiUsageLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutApiUsageLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutApiUsageLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutApiUsageLogInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutApiUsageLogInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutApiUsageLogInputSchema),z.lazy(() => MerchantUpdateWithoutApiUsageLogInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutApiUsageLogInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutApiUsageLogNestedInputSchema;
