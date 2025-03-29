import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutMerchantInputSchema } from './NotificationCreateWithoutMerchantInputSchema';
import { NotificationUncheckedCreateWithoutMerchantInputSchema } from './NotificationUncheckedCreateWithoutMerchantInputSchema';
import { NotificationCreateOrConnectWithoutMerchantInputSchema } from './NotificationCreateOrConnectWithoutMerchantInputSchema';
import { NotificationCreateManyMerchantInputEnvelopeSchema } from './NotificationCreateManyMerchantInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => NotificationCreateWithoutMerchantInputSchema),z.lazy(() => NotificationCreateWithoutMerchantInputSchema).array(),z.lazy(() => NotificationUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => NotificationCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema),z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default NotificationCreateNestedManyWithoutMerchantInputSchema;
