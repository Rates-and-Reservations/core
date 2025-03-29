import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateWithoutMerchantInputSchema } from './ApiKeyCreateWithoutMerchantInputSchema';
import { ApiKeyUncheckedCreateWithoutMerchantInputSchema } from './ApiKeyUncheckedCreateWithoutMerchantInputSchema';
import { ApiKeyCreateOrConnectWithoutMerchantInputSchema } from './ApiKeyCreateOrConnectWithoutMerchantInputSchema';
import { ApiKeyUpsertWithWhereUniqueWithoutMerchantInputSchema } from './ApiKeyUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { ApiKeyCreateManyMerchantInputEnvelopeSchema } from './ApiKeyCreateManyMerchantInputEnvelopeSchema';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';
import { ApiKeyUpdateWithWhereUniqueWithoutMerchantInputSchema } from './ApiKeyUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { ApiKeyUpdateManyWithWhereWithoutMerchantInputSchema } from './ApiKeyUpdateManyWithWhereWithoutMerchantInputSchema';
import { ApiKeyScalarWhereInputSchema } from './ApiKeyScalarWhereInputSchema';

export const ApiKeyUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.ApiKeyUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutMerchantInputSchema),z.lazy(() => ApiKeyCreateWithoutMerchantInputSchema).array(),z.lazy(() => ApiKeyUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiKeyCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ApiKeyCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ApiKeyUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiKeyCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ApiKeyWhereUniqueInputSchema),z.lazy(() => ApiKeyWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ApiKeyWhereUniqueInputSchema),z.lazy(() => ApiKeyWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ApiKeyWhereUniqueInputSchema),z.lazy(() => ApiKeyWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ApiKeyWhereUniqueInputSchema),z.lazy(() => ApiKeyWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => ApiKeyUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ApiKeyUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => ApiKeyUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ApiKeyScalarWhereInputSchema),z.lazy(() => ApiKeyScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default ApiKeyUpdateManyWithoutMerchantNestedInputSchema;
