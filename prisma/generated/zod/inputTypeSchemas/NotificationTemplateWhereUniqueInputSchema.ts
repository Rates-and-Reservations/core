import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTemplateWhereInputSchema } from './NotificationTemplateWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumNotificationTypeFilterSchema } from './EnumNotificationTypeFilterSchema';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { EnumNotificationChannelFilterSchema } from './EnumNotificationChannelFilterSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { NotificationListRelationFilterSchema } from './NotificationListRelationFilterSchema';

export const NotificationTemplateWhereUniqueInputSchema: z.ZodType<Prisma.NotificationTemplateWhereUniqueInput> = z.object({
  id: z.string().cuid()
})
.and(z.object({
  id: z.string().cuid().optional(),
  AND: z.union([ z.lazy(() => NotificationTemplateWhereInputSchema),z.lazy(() => NotificationTemplateWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTemplateWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTemplateWhereInputSchema),z.lazy(() => NotificationTemplateWhereInputSchema).array() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumNotificationTypeFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  channel: z.union([ z.lazy(() => EnumNotificationChannelFilterSchema),z.lazy(() => NotificationChannelSchema) ]).optional(),
  subject: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema),z.coerce.date() ]).optional(),
  Notification: z.lazy(() => NotificationListRelationFilterSchema).optional()
}).strict());

export default NotificationTemplateWhereUniqueInputSchema;
