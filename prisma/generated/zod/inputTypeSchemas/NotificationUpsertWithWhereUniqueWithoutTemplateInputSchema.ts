import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutTemplateInputSchema } from './NotificationUpdateWithoutTemplateInputSchema';
import { NotificationUncheckedUpdateWithoutTemplateInputSchema } from './NotificationUncheckedUpdateWithoutTemplateInputSchema';
import { NotificationCreateWithoutTemplateInputSchema } from './NotificationCreateWithoutTemplateInputSchema';
import { NotificationUncheckedCreateWithoutTemplateInputSchema } from './NotificationUncheckedCreateWithoutTemplateInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutTemplateInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutTemplateInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutTemplateInputSchema),z.lazy(() => NotificationUncheckedUpdateWithoutTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutTemplateInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default NotificationUpsertWithWhereUniqueWithoutTemplateInputSchema;
