import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManyTemplateInputSchema } from './NotificationCreateManyTemplateInputSchema';

export const NotificationCreateManyTemplateInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyTemplateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => NotificationCreateManyTemplateInputSchema),z.lazy(() => NotificationCreateManyTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default NotificationCreateManyTemplateInputEnvelopeSchema;
