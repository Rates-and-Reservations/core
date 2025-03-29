import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTemplateUpdateWithoutNotificationInputSchema } from './NotificationTemplateUpdateWithoutNotificationInputSchema';
import { NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema } from './NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema';
import { NotificationTemplateCreateWithoutNotificationInputSchema } from './NotificationTemplateCreateWithoutNotificationInputSchema';
import { NotificationTemplateUncheckedCreateWithoutNotificationInputSchema } from './NotificationTemplateUncheckedCreateWithoutNotificationInputSchema';
import { NotificationTemplateWhereInputSchema } from './NotificationTemplateWhereInputSchema';

export const NotificationTemplateUpsertWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTemplateUpsertWithoutNotificationInput> = z.object({
  update: z.union([ z.lazy(() => NotificationTemplateUpdateWithoutNotificationInputSchema),z.lazy(() => NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationTemplateCreateWithoutNotificationInputSchema),z.lazy(() => NotificationTemplateUncheckedCreateWithoutNotificationInputSchema) ]),
  where: z.lazy(() => NotificationTemplateWhereInputSchema).optional()
}).strict();

export default NotificationTemplateUpsertWithoutNotificationInputSchema;
