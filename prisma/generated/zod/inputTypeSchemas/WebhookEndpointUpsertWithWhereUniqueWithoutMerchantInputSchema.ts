import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointWhereUniqueInputSchema } from './WebhookEndpointWhereUniqueInputSchema';
import { WebhookEndpointUpdateWithoutMerchantInputSchema } from './WebhookEndpointUpdateWithoutMerchantInputSchema';
import { WebhookEndpointUncheckedUpdateWithoutMerchantInputSchema } from './WebhookEndpointUncheckedUpdateWithoutMerchantInputSchema';
import { WebhookEndpointCreateWithoutMerchantInputSchema } from './WebhookEndpointCreateWithoutMerchantInputSchema';
import { WebhookEndpointUncheckedCreateWithoutMerchantInputSchema } from './WebhookEndpointUncheckedCreateWithoutMerchantInputSchema';

export const WebhookEndpointUpsertWithWhereUniqueWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEndpointUpsertWithWhereUniqueWithoutMerchantInput> = z.object({
  where: z.lazy(() => WebhookEndpointWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => WebhookEndpointUpdateWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUncheckedUpdateWithoutMerchantInputSchema) ]),
  create: z.union([ z.lazy(() => WebhookEndpointCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUncheckedCreateWithoutMerchantInputSchema) ]),
}).strict();

export default WebhookEndpointUpsertWithWhereUniqueWithoutMerchantInputSchema;
