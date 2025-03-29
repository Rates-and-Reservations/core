import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationChannelSchema } from './NotificationChannelSchema';

export const EnumNotificationChannelFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNotificationChannelFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => NotificationChannelSchema).optional()
}).strict();

export default EnumNotificationChannelFieldUpdateOperationsInputSchema;
