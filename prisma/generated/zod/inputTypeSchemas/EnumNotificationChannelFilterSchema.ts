import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationChannelSchema } from './NotificationChannelSchema';
import { NestedEnumNotificationChannelFilterSchema } from './NestedEnumNotificationChannelFilterSchema';

export const EnumNotificationChannelFilterSchema: z.ZodType<Prisma.EnumNotificationChannelFilter> = z.object({
  equals: z.lazy(() => NotificationChannelSchema).optional(),
  in: z.lazy(() => NotificationChannelSchema).array().optional(),
  notIn: z.lazy(() => NotificationChannelSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationChannelSchema),z.lazy(() => NestedEnumNotificationChannelFilterSchema) ]).optional(),
}).strict();

export default EnumNotificationChannelFilterSchema;
