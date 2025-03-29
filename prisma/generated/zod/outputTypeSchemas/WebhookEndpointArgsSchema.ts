import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WebhookEndpointSelectSchema } from '../inputTypeSchemas/WebhookEndpointSelectSchema';
import { WebhookEndpointIncludeSchema } from '../inputTypeSchemas/WebhookEndpointIncludeSchema';

export const WebhookEndpointArgsSchema: z.ZodType<Prisma.WebhookEndpointDefaultArgs> = z.object({
  select: z.lazy(() => WebhookEndpointSelectSchema).optional(),
  include: z.lazy(() => WebhookEndpointIncludeSchema).optional(),
}).strict();

export default WebhookEndpointArgsSchema;
