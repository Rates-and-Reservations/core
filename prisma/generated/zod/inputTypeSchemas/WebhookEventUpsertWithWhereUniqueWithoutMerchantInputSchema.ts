import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventUpdateWithoutMerchantInputSchema } from './WebhookEventUpdateWithoutMerchantInputSchema';
import { WebhookEventUncheckedUpdateWithoutMerchantInputSchema } from './WebhookEventUncheckedUpdateWithoutMerchantInputSchema';
import { WebhookEventCreateWithoutMerchantInputSchema } from './WebhookEventCreateWithoutMerchantInputSchema';
import { WebhookEventUncheckedCreateWithoutMerchantInputSchema } from './WebhookEventUncheckedCreateWithoutMerchantInputSchema';

export const WebhookEventUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEventUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => WebhookEventWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WebhookEventUpdateWithoutMerchantInputSchema),z.lazy(() => WebhookEventUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default WebhookEventUpsertWithWhereUniqueWithoutMerchantInputSchema;
