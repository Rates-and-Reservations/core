import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutBookingInputSchema } from './NotificationCreateWithoutBookingInputSchema';
import { NotificationUncheckedCreateWithoutBookingInputSchema } from './NotificationUncheckedCreateWithoutBookingInputSchema';
import { NotificationCreateOrConnectWithoutBookingInputSchema } from './NotificationCreateOrConnectWithoutBookingInputSchema';
import { NotificationCreateManyBookingInputEnvelopeSchema } from './NotificationCreateManyBookingInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationUncheckedCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutBookingInputSchema),z.lazy(() => NotificationCreateWithoutBookingInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutBookingInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutBookingInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default NotificationUncheckedCreateNestedManyWithoutBookingInputSchema;
