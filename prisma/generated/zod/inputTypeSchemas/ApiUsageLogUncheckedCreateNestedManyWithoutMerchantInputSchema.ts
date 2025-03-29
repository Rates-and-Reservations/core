import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogCreateWithoutMerchantInputSchema } from './ApiUsageLogCreateWithoutMerchantInputSchema';
import { ApiUsageLogUncheckedCreateWithoutMerchantInputSchema } from './ApiUsageLogUncheckedCreateWithoutMerchantInputSchema';
import { ApiUsageLogCreateOrConnectWithoutMerchantInputSchema } from './ApiUsageLogCreateOrConnectWithoutMerchantInputSchema';
import { ApiUsageLogCreateManyMerchantInputEnvelopeSchema } from './ApiUsageLogCreateManyMerchantInputEnvelopeSchema';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';

export const ApiUsageLogUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.ApiUsageLogUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => ApiUsageLogCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogCreateWithoutMerchantInputSchema).array(),z.lazy(() => ApiUsageLogUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiUsageLogCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => ApiUsageLogCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiUsageLogCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ApiUsageLogUncheckedCreateNestedManyWithoutMerchantInputSchema;
