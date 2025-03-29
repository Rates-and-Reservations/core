import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutBookingInputSchema } from './NotificationUpdateWithoutBookingInputSchema';
import { NotificationUncheckedUpdateWithoutBookingInputSchema } from './NotificationUncheckedUpdateWithoutBookingInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutBookingInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default NotificationUpdateWithWhereUniqueWithoutBookingInputSchema;
