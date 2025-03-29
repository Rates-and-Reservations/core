import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerUpdateWithoutNotificationInputSchema } from './CustomerUpdateWithoutNotificationInputSchema';
import { CustomerUncheckedUpdateWithoutNotificationInputSchema } from './CustomerUncheckedUpdateWithoutNotificationInputSchema';

export const CustomerUpdateToOneWithWhereWithoutNotificationInputSchema: z.ZodType<Prisma.CustomerUpdateToOneWithWhereWithoutNotificationInput> = z.object({
  where: z.lazy(() => CustomerWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CustomerUpdateWithoutNotificationInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutNotificationInputSchema) ]),
}).strict();

export default CustomerUpdateToOneWithWhereWithoutNotificationInputSchema;
