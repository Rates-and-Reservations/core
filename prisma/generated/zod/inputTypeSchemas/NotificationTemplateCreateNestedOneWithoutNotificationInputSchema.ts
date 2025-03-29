import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTemplateCreateWithoutNotificationInputSchema } from './NotificationTemplateCreateWithoutNotificationInputSchema';
import { NotificationTemplateUncheckedCreateWithoutNotificationInputSchema } from './NotificationTemplateUncheckedCreateWithoutNotificationInputSchema';
import { NotificationTemplateCreateOrConnectWithoutNotificationInputSchema } from './NotificationTemplateCreateOrConnectWithoutNotificationInputSchema';
import { NotificationTemplateWhereUniqueInputSchema } from './NotificationTemplateWhereUniqueInputSchema';

export const NotificationTemplateCreateNestedOneWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTemplateCreateNestedOneWithoutNotificationInput> = z.object({
  create: z.union([ z.lazy(() => NotificationTemplateCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTemplateUncheckedCreateWithoutNotificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => NotificationTemplateCreateOrConnectWithoutNotificationInputSchema).optional(),
  connect: z.lazy(() => NotificationTemplateWhereUniqueInputSchema).optional()
}).strict();

export default NotificationTemplateCreateNestedOneWithoutNotificationInputSchema;
