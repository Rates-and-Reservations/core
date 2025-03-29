import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { WebhookEndpointCreateWithoutMerchantInputSchema } from './WebhookEndpointCreateWithoutMerchantInputSchema';
import { WebhookEndpointUncheckedCreateWithoutMerchantInputSchema } from './WebhookEndpointUncheckedCreateWithoutMerchantInputSchema';
import { WebhookEndpointCreateOrConnectWithoutMerchantInputSchema } from './WebhookEndpointCreateOrConnectWithoutMerchantInputSchema';
import { WebhookEndpointUpsertWithWhereUniqueWithoutMerchantInputSchema } from './WebhookEndpointUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { WebhookEndpointCreateManyMerchantInputEnvelopeSchema } from './WebhookEndpointCreateManyMerchantInputEnvelopeSchema';
import { WebhookEndpointWhereUniqueInputSchema } from './WebhookEndpointWhereUniqueInputSchema';
import { WebhookEndpointUpdateWithWhereUniqueWithoutMerchantInputSchema } from './WebhookEndpointUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { WebhookEndpointUpdateManyWithWhereWithoutMerchantInputSchema } from './WebhookEndpointUpdateManyWithWhereWithoutMerchantInputSchema';
import { WebhookEndpointScalarWhereInputSchema } from './WebhookEndpointScalarWhereInputSchema';

export const WebhookEndpointUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.WebhookEndpointUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => WebhookEndpointCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointCreateWithoutMerchantInputSchema).array(),z.lazy(() => WebhookEndpointUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => WebhookEndpointCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => WebhookEndpointUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => WebhookEndpointCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => WebhookEndpointWhereUniqueInputSchema),z.lazy(() => WebhookEndpointWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => WebhookEndpointWhereUniqueInputSchema),z.lazy(() => WebhookEndpointWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => WebhookEndpointWhereUniqueInputSchema),z.lazy(() => WebhookEndpointWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => WebhookEndpointWhereUniqueInputSchema),z.lazy(() => WebhookEndpointWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => WebhookEndpointUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => WebhookEndpointUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => WebhookEndpointUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => WebhookEndpointScalarWhereInputSchema),z.lazy(() => WebhookEndpointScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default WebhookEndpointUncheckedUpdateManyWithoutMerchantNestedInputSchema;
