import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const WebhookEventLogCreateManyInputSchema: z.ZodType<Prisma.WebhookEventLogCreateManyInput> = z.object({
  id: z.string().cuid().optional(),
  eventId: z.string(),
  attemptNumber: z.number().int(),
  responseCode: z.number().int(),
  responseBody: z.string().optional().nullable(),
  errorMessage: z.string().optional().nullable(),
  sentAt: z.coerce.date(),
  createdAt: z.coerce.date().optional()
}).strict();

export default WebhookEventLogCreateManyInputSchema;
