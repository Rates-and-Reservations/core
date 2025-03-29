import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationChannelSchema } from './NotificationChannelSchema';

export const NestedEnumNotificationChannelFilterSchema: z.ZodType<Prisma.NestedEnumNotificationChannelFilter> = z.object({
  equals: z.lazy(() => NotificationChannelSchema).optional(),
  in: z.lazy(() => NotificationChannelSchema).array().optional(),
  notIn: z.lazy(() => NotificationChannelSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationChannelSchema),z.lazy(() => NestedEnumNotificationChannelFilterSchema) ]).optional(),
}).strict();

export default NestedEnumNotificationChannelFilterSchema;
