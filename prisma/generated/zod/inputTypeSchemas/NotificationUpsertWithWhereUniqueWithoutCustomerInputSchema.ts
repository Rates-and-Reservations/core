import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutCustomerInputSchema } from './NotificationUpdateWithoutCustomerInputSchema';
import { NotificationUncheckedUpdateWithoutCustomerInputSchema } from './NotificationUncheckedUpdateWithoutCustomerInputSchema';
import { NotificationCreateWithoutCustomerInputSchema } from './NotificationCreateWithoutCustomerInputSchema';
import { NotificationUncheckedCreateWithoutCustomerInputSchema } from './NotificationUncheckedCreateWithoutCustomerInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutCustomerInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutCustomerInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutCustomerInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default NotificationUpsertWithWhereUniqueWithoutCustomerInputSchema;
