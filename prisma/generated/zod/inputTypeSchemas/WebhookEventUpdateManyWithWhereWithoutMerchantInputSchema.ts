import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventScalarWhereInputSchema } from './WebhookEventScalarWhereInputSchema';
import { WebhookEventUpdateManyMutationInputSchema } from './WebhookEventUpdateManyMutationInputSchema';
import { WebhookEventUncheckedUpdateManyWithoutMerchantInputSchema } from './WebhookEventUncheckedUpdateManyWithoutMerchantInputSchema';

export const WebhookEventUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEventUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => WebhookEventScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WebhookEventUpdateManyMutationInputSchema),z.lazy(() => WebhookEventUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default WebhookEventUpdateManyWithWhereWithoutMerchantInputSchema;
