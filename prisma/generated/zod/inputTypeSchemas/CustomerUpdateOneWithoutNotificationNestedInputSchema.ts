import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateWithoutNotificationInputSchema } from './CustomerCreateWithoutNotificationInputSchema';
import { CustomerUncheckedCreateWithoutNotificationInputSchema } from './CustomerUncheckedCreateWithoutNotificationInputSchema';
import { CustomerCreateOrConnectWithoutNotificationInputSchema } from './CustomerCreateOrConnectWithoutNotificationInputSchema';
import { CustomerUpsertWithoutNotificationInputSchema } from './CustomerUpsertWithoutNotificationInputSchema';
import { CustomerWhereInputSchema } from './CustomerWhereInputSchema';
import { CustomerWhereUniqueInputSchema } from './CustomerWhereUniqueInputSchema';
import { CustomerUpdateToOneWithWhereWithoutNotificationInputSchema } from './CustomerUpdateToOneWithWhereWithoutNotificationInputSchema';
import { CustomerUpdateWithoutNotificationInputSchema } from './CustomerUpdateWithoutNotificationInputSchema';
import { CustomerUncheckedUpdateWithoutNotificationInputSchema } from './CustomerUncheckedUpdateWithoutNotificationInputSchema';

export const CustomerUpdateOneWithoutNotificationNestedInputSchema: z.ZodType<Prisma.CustomerUpdateOneWithoutNotificationNestedInput> = z.object({
  create: z.union([ z.lazy(() => CustomerCreateWithoutNotificationInputSchema),z.lazy(() => CustomerUncheckedCreateWithoutNotificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CustomerCreateOrConnectWithoutNotificationInputSchema).optional(),
  upsert: z.lazy(() => CustomerUpsertWithoutNotificationInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => CustomerWhereInputSchema) ]).optional(),
  connect: z.lazy(() => CustomerWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CustomerUpdateToOneWithWhereWithoutNotificationInputSchema),z.lazy(() => CustomerUpdateWithoutNotificationInputSchema),z.lazy(() => CustomerUncheckedUpdateWithoutNotificationInputSchema) ]).optional(),
}).strict();

export default CustomerUpdateOneWithoutNotificationNestedInputSchema;
