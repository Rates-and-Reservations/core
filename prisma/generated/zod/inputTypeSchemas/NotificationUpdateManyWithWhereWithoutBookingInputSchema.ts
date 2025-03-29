import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutBookingInputSchema } from './NotificationUncheckedUpdateManyWithoutBookingInputSchema';

export const NotificationUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export default NotificationUpdateManyWithWhereWithoutBookingInputSchema;
