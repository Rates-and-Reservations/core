import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTemplateWhereInputSchema } from './NotificationTemplateWhereInputSchema';
import { NotificationTemplateUpdateWithoutNotificationInputSchema } from './NotificationTemplateUpdateWithoutNotificationInputSchema';
import { NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema } from './NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema';

export const NotificationTemplateUpdateToOneWithWhereWithoutNotificationInputSchema: z.ZodType<Prisma.NotificationTemplateUpdateToOneWithWhereWithoutNotificationInput> = z.object({
  where: z.lazy(() => NotificationTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => NotificationTemplateUpdateWithoutNotificationInputSchema),z.lazy(() => NotificationTemplateUncheckedUpdateWithoutNotificationInputSchema) ]),
}).strict();

export default NotificationTemplateUpdateToOneWithWhereWithoutNotificationInputSchema;
