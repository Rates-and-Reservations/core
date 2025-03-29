import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';

export const EnumWebhookEventTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWebhookEventTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => WebhookEventTypeSchema).optional()
}).strict();

export default EnumWebhookEventTypeFieldUpdateOperationsInputSchema;
