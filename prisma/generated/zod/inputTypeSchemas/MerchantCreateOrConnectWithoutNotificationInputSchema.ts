import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutNotificationInputSchema } from './MerchantCreateWithoutNotificationInputSchema';
import { MerchantUncheckedCreateWithoutNotificationInputSchema } from './MerchantUncheckedCreateWithoutNotificationInputSchema';

export const MerchantCreateOrConnectWithoutNotificationInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutNotificationInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutNotificationInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutNotificationInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutNotificationInputSchema;
