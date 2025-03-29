import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutNotificationInputSchema } from './CustomerCreateWithoutNotificationInputSchema';
import { CustomerUncheckedCreateWithoutNotificationInputSchema } from './CustomerUncheckedCreateWithoutNotificationInputSchema';
import { CustomerCreateOrConnectWithoutNotificationInputSchema } from './CustomerCreateOrConnectWithoutNotificationInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';

export const CustomerCreateNestedOneWithoutNotificationInputSchema: z.ZodType<Prisma.CustomerCreateNestedOneWithoutNotificationInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutNotificationInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutNotificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutNotificationInputSchema).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional()
}).strict();

export default CustomerCreateNestedOneWithoutNotificationInputSchema;
