import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutBookingInputSchema } from './NotificationUpdateWithoutBookingInputSchema';
import { NotificationUncheckedUpdateWithoutBookingInputSchema } from './NotificationUncheckedUpdateWithoutBookingInputSchema';
import { NotificationCreateWithoutBookingInputSchema } from './NotificationCreateWithoutBookingInputSchema';
import { NotificationUncheckedCreateWithoutBookingInputSchema } from './NotificationUncheckedCreateWithoutBookingInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutBookingInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutBookingInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default NotificationUpsertWithWhereUniqueWithoutBookingInputSchema;
