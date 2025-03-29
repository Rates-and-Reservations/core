import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutMerchantInputSchema } from './NotificationCreateWithoutMerchantInputSchema';
import { NotificationUncheckedCreateWithoutMerchantInputSchema } from './NotificationUncheckedCreateWithoutMerchantInputSchema';

export const NotificationCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutMerchantInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default NotificationCreateOrConnectWithoutMerchantInputSchema;
