import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageLogCreateWithoutApiKeyInputSchema } from './ApiUsageLogCreateWithoutApiKeyInputSchema';
import { ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema';
import { ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema } from './ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema';
import { ApiUsageLogCreateManyApiKeyInputEnvelopeSchema } from './ApiUsageLogCreateManyApiKeyInputEnvelopeSchema';
import { ApiUsageLogWhereUniqueInputSchema } from './ApiUsageLogWhereUniqueInputSchema';

export const ApiUsageLogCreateNestedManyWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageLogCreateNestedManyWithoutApiKeyInput> = z.object({
  create: z.union([ z.lazy(() => ApiUsageLogCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogCreateWithoutApiKeyInputSchema).array(),z.lazy(() => ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogUncheckedCreateWithoutApiKeyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema),z.lazy(() => ApiUsageLogCreateOrConnectWithoutApiKeyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiUsageLogCreateManyApiKeyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApiUsageLogWhereUniqueInputSchema),z.lazy(() => ApiUsageLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ApiUsageLogCreateNestedManyWithoutApiKeyInputSchema;
