import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerUpdateWithoutNotificationInputSchema } from './CustomerUpdateWithoutNotificationInputSchema';
import { CustomerUncheckedUpdateWithoutNotificationInputSchema } from './CustomerUncheckedUpdateWithoutNotificationInputSchema';
import { CustomerCreateWithoutNotificationInputSchema } from './CustomerCreateWithoutNotificationInputSchema';
import { CustomerUncheckedCreateWithoutNotificationInputSchema } from './CustomerUncheckedCreateWithoutNotificationInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';

export const CustomerUpsertWithoutNotificationInputSchema: z.ZodType<Prisma.CustomerUpsertWithoutNotificationInput> = z.object({
  update: z.union([ z.lazy(() => CustomerUpdateWithoutNotificationInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutNotificationInputSchema) ]),
  create: z.union([ z.lazy(() => CustomerCreateWithoutNotificationInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutNotificationInputSchema) ]),
  where: z.lazy(() => CustomerWhereInputSchema).optional()
}).strict();

export default CustomerUpsertWithoutNotificationInputSchema;
