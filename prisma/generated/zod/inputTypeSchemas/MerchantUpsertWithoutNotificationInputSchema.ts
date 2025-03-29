import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantUpdateWithoutNotificationInputSchema } from './MerchantUpdateWithoutNotificationInputSchema';
import { MerchantUncheckedUpdateWithoutNotificationInputSchema } from './MerchantUncheckedUpdateWithoutNotificationInputSchema';
import { MerchantCreateWithoutNotificationInputSchema } from './MerchantCreateWithoutNotificationInputSchema';
import { MerchantUncheckedCreateWithoutNotificationInputSchema } from './MerchantUncheckedCreateWithoutNotificationInputSchema';
import { MerchantWhereInputSchema } from './MerchantWhereInputSchema';

export const MerchantUpsertWithoutNotificationInputSchema: z.ZodType<Prisma.MerchantUpsertWithoutNotificationInput> = z.object({
  update: z.union([ z.lazy(() => MerchantUpdateWithoutNotificationInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutNotificationInputSchema) ]),
  create: z.union([ z.lazy(() => MerchantCreateWithoutNotificationInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutNotificationInputSchema) ]),
  where: z.lazy(() => MerchantWhereInputSchema).optional()
}).strict();

export default MerchantUpsertWithoutNotificationInputSchema;
