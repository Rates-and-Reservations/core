import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutCustomerInputSchema } from './NotificationCreateWithoutCustomerInputSchema';
import { NotificationUncheckedCreateWithoutCustomerInputSchema } from './NotificationUncheckedCreateWithoutCustomerInputSchema';

export const NotificationCreateOrConnectWithoutCustomerInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutCustomerInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutCustomerInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default NotificationCreateOrConnectWithoutCustomerInputSchema;
