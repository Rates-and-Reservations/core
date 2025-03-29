import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutCustomerInputSchema } from './NotificationUncheckedUpdateManyWithoutCustomerInputSchema';

export const NotificationUpdateManyWithWhereWithoutCustomerInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutCustomerInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutCustomerInputSchema) ]),
}).strict();

export default NotificationUpdateManyWithWhereWithoutCustomerInputSchema;
