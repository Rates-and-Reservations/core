import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventUpdateWithoutMerchantInputSchema } from './WebhookEventUpdateWithoutMerchantInputSchema';
import { WebhookEventUncheckedUpdateWithoutMerchantInputSchema } from './WebhookEventUncheckedUpdateWithoutMerchantInputSchema';

export const WebhookEventUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEventUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => WebhookEventWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WebhookEventUpdateWithoutMerchantInputSchema),z.lazy(() => WebhookEventUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default WebhookEventUpdateWithWhereUniqueWithoutMerchantInputSchema;
