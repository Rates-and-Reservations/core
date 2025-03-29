import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEventCreateWithoutMerchantInputSchema } from './WebhookEventCreateWithoutMerchantInputSchema';
import { WebhookEventUncheckedCreateWithoutMerchantInputSchema } from './WebhookEventUncheckedCreateWithoutMerchantInputSchema';
import { WebhookEventCreateOrConnectWithoutMerchantInputSchema } from './WebhookEventCreateOrConnectWithoutMerchantInputSchema';
import { WebhookEventUpsertWithWhereUniqueWithoutMerchantInputSchema } from './WebhookEventUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { WebhookEventCreateManyMerchantInputEnvelopeSchema } from './WebhookEventCreateManyMerchantInputEnvelopeSchema';
import { WebhookEventWhereUniqueInputSchema } from './WebhookEventWhereUniqueInputSchema';
import { WebhookEventUpdateWithWhereUniqueWithoutMerchantInputSchema } from './WebhookEventUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { WebhookEventUpdateManyWithWhereWithoutMerchantInputSchema } from './WebhookEventUpdateManyWithWhereWithoutMerchantInputSchema';
import { WebhookEventScalarWhereInputSchema } from './WebhookEventScalarWhereInputSchema';

export const WebhookEventUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.WebhookEventUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEventCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEventCreateWithoutMerchantInputSchema).array(),z.lazy(() => WebhookEventUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEventUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookEventCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => WebhookEventCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WebhookEventUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => WebhookEventUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookEventCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WebhookEventWhereUniqueInputSchema),z.lazy(() => WebhookEventWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WebhookEventUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => WebhookEventUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WebhookEventUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => WebhookEventUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WebhookEventScalarWhereInputSchema),z.lazy(() => WebhookEventScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WebhookEventUncheckedUpdateManyWithoutMerchantNestedInputSchema;
