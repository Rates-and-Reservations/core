import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutMerchantInputSchema } from './NotificationCreateWithoutMerchantInputSchema';
import { NotificationUncheckedCreateWithoutMerchantInputSchema } from './NotificationUncheckedCreateWithoutMerchantInputSchema';
import { NotificationCreateOrConnectWithoutMerchantInputSchema } from './NotificationCreateOrConnectWithoutMerchantInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutMerchantInputSchema } from './NotificationUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { NotificationCreateManyMerchantInputEnvelopeSchema } from './NotificationCreateManyMerchantInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutMerchantInputSchema } from './NotificationUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { NotificationUpdateManyWithWhereWithoutMerchantInputSchema } from './NotificationUpdateManyWithWhereWithoutMerchantInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutMerchantInputSchema),z.lazy(() => NotificationCreateWithoutMerchantInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => NotificationUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => NotificationUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => NotificationUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema),z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default NotificationUpdateManyWithoutMerchantNestedInputSchema;
