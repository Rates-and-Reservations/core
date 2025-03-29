import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTemplateWhereInputSchema } from './NotificationTemplateWhereInputSchema';

export const NotificationTemplateNullableScalarRelationFilterSchema: z.ZodType<Prisma.NotificationTemplateNullableScalarRelationFilter> = z.object({
  is: z.lazy(() => NotificationTemplateWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => NotificationTemplateWhereInputSchema).optional().nullable()
}).strict();

export default NotificationTemplateNullableScalarRelationFilterSchema;
