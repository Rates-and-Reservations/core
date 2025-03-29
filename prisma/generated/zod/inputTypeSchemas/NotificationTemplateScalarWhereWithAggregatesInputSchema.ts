import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { EnumNotificationTypeWithAggregatesFilterSchema } from './EnumNotificationTypeWithAggregatesFilterSchema';
import { NotificationTypeSchema } from './NotificationTypeSchema';
import { EnumNotificationChannelWithAggregatesFilterSchema } from './EnumNotificationChannelWithAggregatesFilterSchema';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { BoolWithAggregatesFilterSchema } from './BoolWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const NotificationTemplateScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.NotificationTemplateScalarWhereWithAggregatesInput> = z.object({
  AND: z.union([ z.lazy(() => NotificationTemplateScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationTemplateScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationTemplateScalarWhereWithAggregatesInputSchema),z.lazy(() => NotificationTemplateScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  merchantId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  type: z.union([ z.lazy(() => EnumNotificationTypeWithAggregatesFilterSchema),z.lazy(() => NotificationTypeSchema) ]).optional(),
  channel: z.union([ z.lazy(() => EnumNotificationChannelWithAggregatesFilterSchema),z.lazy(() => NotificationChannelSchema) ]).optional(),
  subject: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  body: z.union([ z.lazy(() => StringWithAggregatesFilterSchema),z.string() ]).optional(),
  isActive: z.union([ z.lazy(() => BoolWithAggregatesFilterSchema),z.boolean() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema),z.coerce.date() ]).optional(),
}).strict();

export default NotificationTemplateScalarWhereWithAggregatesInputSchema;
