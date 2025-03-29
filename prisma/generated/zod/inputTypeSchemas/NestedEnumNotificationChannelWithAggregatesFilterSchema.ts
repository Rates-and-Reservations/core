import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumNotificationChannelFilterSchema } from './NestedEnumNotificationChannelFilterSchema';

export const NestedEnumNotificationChannelWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumNotificationChannelWithAggregatesFilter> = z.object({
  equals: z.lazy(() => NotificationChannelSchema).optional(),
  in: z.lazy(() => NotificationChannelSchema).array().optional(),
  notIn: z.lazy(() => NotificationChannelSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationChannelSchema),z.lazy(() => NestedEnumNotificationChannelWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationChannelFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationChannelFilterSchema).optional()
}).strict();

export default NestedEnumNotificationChannelWithAggregatesFilterSchema;
