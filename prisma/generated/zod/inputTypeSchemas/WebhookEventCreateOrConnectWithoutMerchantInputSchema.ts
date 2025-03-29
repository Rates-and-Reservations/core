import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventCreateWithoutMerchantInputSchema } from './WebhookEventCreateWithoutMerchantInputSchema';
import { WebhookEventUncheckedCreateWithoutMerchantInputSchema } from './WebhookEventUncheckedCreateWithoutMerchantInputSchema';

export const WebhookEventCreateOrConnectWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEventCreateOrConnectWithoutMerchantInput> = z.object({
  where: z.lazy(() => WebhookEventWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default WebhookEventCreateOrConnectWithoutMerchantInputSchema;
