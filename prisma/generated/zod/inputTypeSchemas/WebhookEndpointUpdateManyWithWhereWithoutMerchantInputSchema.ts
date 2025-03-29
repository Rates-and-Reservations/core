import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointScalarWhereInputSchema } from './WebhookEndpointScalarWhereInputSchema';
import { WebhookEndpointUpdateManyMutationInputSchema } from './WebhookEndpointUpdateManyMutationInputSchema';
import { WebhookEndpointUncheckedUpdateManyWithoutMerchantInputSchema } from './WebhookEndpointUncheckedUpdateManyWithoutMerchantInputSchema';

export const WebhookEndpointUpdateManyWithWhereWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEndpointUpdateManyWithWhereWithoutMerchantInput> = z.object({
  where: z.lazy(() => WebhookEndpointScalarWhereInputSchema),
  data: z.union([ z.lazy(() => WebhookEndpointUpdateManyMutationInputSchema),z.lazy(() => WebhookEndpointUncheckedUpdateManyWithoutMerchantInputSchema) ]),
}).strict();

export default WebhookEndpointUpdateManyWithWhereWithoutMerchantInputSchema;
