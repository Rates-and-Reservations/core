import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTemplateWhereUniqueInputSchema } from './NotificationTemplateWhereUniqueInputSchema';
import { NotificationTemplateCreateWithoutNotificationInputSchema } from './NotificationTemplateCreateWithoutNotificationInputSchema';
import { NotificationTemplateUncheckedCreateWithoutNotificationInputSchema } from './NotificationTemplateUncheckedCreateWithoutNotificationInputSchema';

export const NotificationTemplateCreateOrConnectWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTemplateCreateOrConnectWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationTemplateCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTemplateUncheckedCreateWithoutNotificationInputSchema) ]),
}).strict();

export default NotificationTemplateCreateOrConnectWithoutNotificationInputSchema;
