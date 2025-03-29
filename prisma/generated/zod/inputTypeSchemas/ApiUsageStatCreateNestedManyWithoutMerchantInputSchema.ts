import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatCreateWithoutMerchantInputSchema } from './ApiUsageStatCreateWithoutMerchantInputSchema';
import { ApiUsageStatUncheckedCreateWithoutMerchantInputSchema } from './ApiUsageStatUncheckedCreateWithoutMerchantInputSchema';
import { ApiUsageStatCreateOrConnectWithoutMerchantInputSchema } from './ApiUsageStatCreateOrConnectWithoutMerchantInputSchema';
import { ApiUsageStatCreateManyMerchantInputEnvelopeSchema } from './ApiUsageStatCreateManyMerchantInputEnvelopeSchema';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';

export const ApiUsageStatCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageStatCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => ApiUsageStatCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatCreateWithoutMerchantInputSchema).array(),z.lazy(() => ApiUsageStatUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiUsageStatCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ApiUsageStatCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiUsageStatCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ApiUsageStatCreateNestedManyWithoutMerchantInputSchema;
