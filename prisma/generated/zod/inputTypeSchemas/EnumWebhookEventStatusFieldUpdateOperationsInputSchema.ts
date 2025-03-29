import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';

export const EnumWebhookEventStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumWebhookEventStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => WebhookEventStatusSchema).optional()
}).strict();

export default EnumWebhookEventStatusFieldUpdateOperationsInputSchema;
