import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationTemplateCountOutputTypeSelectSchema } from './NotificationTemplateCountOutputTypeSelectSchema';

export const NotificationTemplateCountOutputTypeArgsSchema: z.ZodType<Prisma.NotificationTemplateCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => NotificationTemplateCountOutputTypeSelectSchema).nullish(),
}).strict();

export default NotificationTemplateCountOutputTypeSelectSchema;
