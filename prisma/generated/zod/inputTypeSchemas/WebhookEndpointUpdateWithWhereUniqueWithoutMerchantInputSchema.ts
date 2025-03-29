import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointWhereUniqueInputSchema } from './WebhookEndpointWhereUniqueInputSchema';
import { WebhookEndpointUpdateWithoutMerchantInputSchema } from './WebhookEndpointUpdateWithoutMerchantInputSchema';
import { WebhookEndpointUncheckedUpdateWithoutMerchantInputSchema } from './WebhookEndpointUncheckedUpdateWithoutMerchantInputSchema';

export const WebhookEndpointUpdateWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEndpointUpdateWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => WebhookEndpointWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => WebhookEndpointUpdateWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUncheckedUpdateWithoutMerchantInputSchema) ]),
}).strict();

export default WebhookEndpointUpdateWithWhereUniqueWithoutMerchantInputSchema;
