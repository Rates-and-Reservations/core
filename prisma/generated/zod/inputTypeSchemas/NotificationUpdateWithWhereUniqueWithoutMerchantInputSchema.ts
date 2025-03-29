import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutMerchantInputSchema } from './NotificationUpdateWithoutMerchantInputSchema';
import { NotificationUncheckedUpdateWithoutMerchantInputSchema } from './NotificationUncheckedUpdateWithoutMerchantInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutMerchantInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default NotificationUpdateWithWhereUniqueWithoutMerchantInputSchema;
