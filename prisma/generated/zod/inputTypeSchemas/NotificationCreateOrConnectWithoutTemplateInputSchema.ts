import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutTemplateInputSchema } from './NotificationCreateWithoutTemplateInputSchema';
import { NotificationUncheckedCreateWithoutTemplateInputSchema } from './NotificationUncheckedCreateWithoutTemplateInputSchema';

export const NotificationCreateOrConnectWithoutTemplateInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutTemplateInput> = z.object({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutTemplateInputSchema),z.lazy(() => NotificationUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default NotificationCreateOrConnectWithoutTemplateInputSchema;
