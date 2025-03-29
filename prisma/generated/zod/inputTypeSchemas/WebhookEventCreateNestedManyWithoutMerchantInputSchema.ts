import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateWithoutMerchantInputSchema } from './WebhookEventCreateWithoutMerchantInputSchema';
import { WebhookEventUncheckedCreateWithoutMerchantInputSchema } from './WebhookEventUncheckedCreateWithoutMerchantInputSchema';
import { WebhookEventCreateOrConnectWithoutMerchantInputSchema } from './WebhookEventCreateOrConnectWithoutMerchantInputSchema';
import { WebhookEventCreateManyMerchantInputEnvelopeSchema } from './WebhookEventCreateManyMerchantInputEnvelopeSchema';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';

export const WebhookEventCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.WebhookEventCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEventCreateWithoutMerchantInputSchema).array(),z.lazy(() => WebhookEventUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookEventCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => WebhookEventCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookEventCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default WebhookEventCreateNestedManyWithoutMerchantInputSchema;
