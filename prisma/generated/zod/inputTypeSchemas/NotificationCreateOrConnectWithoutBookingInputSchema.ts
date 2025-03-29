import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutBookingInputSchema } from './NotificationCreateWithoutBookingInputSchema';
import { NotificationUncheckedCreateWithoutBookingInputSchema } from './NotificationUncheckedCreateWithoutBookingInputSchema';

export const NotificationCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutBookingInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default NotificationCreateOrConnectWithoutBookingInputSchema;
