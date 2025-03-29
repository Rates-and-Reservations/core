import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutBookingInputSchema } from './NotificationCreateWithoutBookingInputSchema';
import { NotificationUncheckedCreateWithoutBookingInputSchema } from './NotificationUncheckedCreateWithoutBookingInputSchema';
import { NotificationCreateOrConnectWithoutBookingInputSchema } from './NotificationCreateOrConnectWithoutBookingInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutBookingInputSchema } from './NotificationUpsertWithWhereUniqueWithoutBookingInputSchema';
import { NotificationCreateManyBookingInputEnvelopeSchema } from './NotificationCreateManyBookingInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutBookingInputSchema } from './NotificationUpdateWithWhereUniqueWithoutBookingInputSchema';
import { NotificationUpdateManyWithWhereWithoutBookingInputSchema } from './NotificationUpdateManyWithWhereWithoutBookingInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUncheckedUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.NotificationUncheckedUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutBookingInputSchema),z.lazy(() => NotificationCreateWithoutBookingInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutBookingInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutBookingInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default NotificationUncheckedUpdateManyWithoutBookingNestedInputSchema;
