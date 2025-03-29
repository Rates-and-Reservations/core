import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutTemplateInputSchema } from './NotificationUncheckedUpdateManyWithoutTemplateInputSchema';

export const NotificationUpdateManyWithWhereWithoutTemplateInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutTemplateInput> = z.object({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema),z.lazy(() => NotificationUncheckedUpdateManyWithoutTemplateInputSchema) ]),
}).strict();

export default NotificationUpdateManyWithWhereWithoutTemplateInputSchema;
