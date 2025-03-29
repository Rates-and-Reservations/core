import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateWithoutMerchantInputSchema } from './ApiKeyCreateWithoutMerchantInputSchema';
import { ApiKeyUncheckedCreateWithoutMerchantInputSchema } from './ApiKeyUncheckedCreateWithoutMerchantInputSchema';
import { ApiKeyCreateOrConnectWithoutMerchantInputSchema } from './ApiKeyCreateOrConnectWithoutMerchantInputSchema';
import { ApiKeyCreateManyMerchantInputEnvelopeSchema } from './ApiKeyCreateManyMerchantInputEnvelopeSchema';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';

export const ApiKeyCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.ApiKeyCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutMerchantInputSchema),z.lazy(() => ApiKeyCreateWithoutMerchantInputSchema).array(),z.lazy(() => ApiKeyUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiKeyCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ApiKeyCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiKeyCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApiKeyWhereUniqueInputSchema),z.lazy(() => ApiKeyWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ApiKeyCreateNestedManyWithoutMerchantInputSchema;
