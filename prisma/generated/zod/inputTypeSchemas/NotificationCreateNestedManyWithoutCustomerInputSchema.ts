import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutCustomerInputSchema } from './NotificationCreateWithoutCustomerInputSchema';
import { NotificationUncheckedCreateWithoutCustomerInputSchema } from './NotificationUncheckedCreateWithoutCustomerInputSchema';
import { NotificationCreateOrConnectWithoutCustomerInputSchema } from './NotificationCreateOrConnectWithoutCustomerInputSchema';
import { NotificationCreateManyCustomerInputEnvelopeSchema } from './NotificationCreateManyCustomerInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutCustomerInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutCustomerInputSchema),z.lazy(() => NotificationCreateWithoutCustomerInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyCustomerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default NotificationCreateNestedManyWithoutCustomerInputSchema;
