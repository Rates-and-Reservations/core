import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutCustomerInputSchema } from './NotificationUpdateWithoutCustomerInputSchema';
import { NotificationUncheckedUpdateWithoutCustomerInputSchema } from './NotificationUncheckedUpdateWithoutCustomerInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutCustomerInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutCustomerInputSchema) ]),
}).strict();

export default NotificationUpdateWithWhereUniqueWithoutCustomerInputSchema;
