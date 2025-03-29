import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerCreateWithoutNotificationInputSchema } from './CustomerCreateWithoutNotificationInputSchema';
import { CustomerUncheckedCreateWithoutNotificationInputSchema } from './CustomerUncheckedCreateWithoutNotificationInputSchema';

export const CustomerCreateOrConnectWithoutNotificationInputSchema: z.ZodType<Prisma.CustomerCreateOrConnectWithoutNotificationInput> = z.object({
  where: z.lazy(() => CustomerWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CustomerCreateWithoutNotificationInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutNotificationInputSchema) ]),
}).strict();

export default CustomerCreateOrConnectWithoutNotificationInputSchema;
