import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutTemplateInputSchema } from './NotificationUpdateWithoutTemplateInputSchema';
import { NotificationUncheckedUpdateWithoutTemplateInputSchema } from './NotificationUncheckedUpdateWithoutTemplateInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutTemplateInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutTemplateInputSchema) ]),
}).strict();

export default NotificationUpdateWithWhereUniqueWithoutTemplateInputSchema;
