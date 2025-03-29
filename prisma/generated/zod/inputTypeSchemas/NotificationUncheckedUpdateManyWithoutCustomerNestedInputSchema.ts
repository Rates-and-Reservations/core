import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutCustomerInputSchema } from './NotificationCreateWithoutCustomerInputSchema';
import { NotificationUncheckedCreateWithoutCustomerInputSchema } from './NotificationUncheckedCreateWithoutCustomerInputSchema';
import { NotificationCreateOrConnectWithoutCustomerInputSchema } from './NotificationCreateOrConnectWithoutCustomerInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutCustomerInputSchema } from './NotificationUpsertWithWhereUniqueWithoutCustomerInputSchema';
import { NotificationCreateManyCustomerInputEnvelopeSchema } from './NotificationCreateManyCustomerInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutCustomerInputSchema } from './NotificationUpdateWithWhereUniqueWithoutCustomerInputSchema';
import { NotificationUpdateManyWithWhereWithoutCustomerInputSchema } from './NotificationUpdateManyWithWhereWithoutCustomerInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutCustomerNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutCustomerInputSchema),z.lazy(() => NotificationCreateWithoutCustomerInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyCustomerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutCustomerInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutCustomerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default NotificationUncheckedUpdateManyWithoutCustomerNestedInputSchema;
