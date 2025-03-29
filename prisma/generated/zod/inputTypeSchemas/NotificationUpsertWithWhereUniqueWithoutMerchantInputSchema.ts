import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutMerchantInputSchema } from './NotificationUpdateWithoutMerchantInputSchema';
import { NotificationUncheckedUpdateWithoutMerchantInputSchema } from './NotificationUncheckedUpdateWithoutMerchantInputSchema';
import { NotificationCreateWithoutMerchantInputSchema } from './NotificationCreateWithoutMerchantInputSchema';
import { NotificationUncheckedCreateWithoutMerchantInputSchema } from './NotificationUncheckedCreateWithoutMerchantInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutMerchantInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutMerchantInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default NotificationUpsertWithWhereUniqueWithoutMerchantInputSchema;
