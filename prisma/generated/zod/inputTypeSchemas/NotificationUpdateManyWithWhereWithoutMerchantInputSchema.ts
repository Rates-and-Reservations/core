import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutMerchantInputSchema } from './NotificationUncheckedUpdateManyWithoutMerchantInputSchema';

export const NotificationUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default NotificationUpdateManyWithWhereWithoutMerchantInputSchema;
