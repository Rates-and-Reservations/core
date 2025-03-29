import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiUsageStatCreateWithoutApiKeyInputSchema } from './ApiUsageStatCreateWithoutApiKeyInputSchema';
import { ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema } from './ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema';
import { ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema } from './ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema';
import { ApiUsageStatCreateManyApiKeyInputEnvelopeSchema } from './ApiUsageStatCreateManyApiKeyInputEnvelopeSchema';
import { ApiUsageStatWhereUniqueInputSchema } from './ApiUsageStatWhereUniqueInputSchema';

export const ApiUsageStatCreateNestedManyWithoutApiKeyInputSchema: z.ZodType<Prisma.ApiUsageStatCreateNestedManyWithoutApiKeyInput> = z.object({
  create: z.union([ z.lazy(() => ApiUsageStatCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatCreateWithoutApiKeyInputSchema).array(),z.lazy(() => ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatUncheckedCreateWithoutApiKeyInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema),z.lazy(() => ApiUsageStatCreateOrConnectWithoutApiKeyInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ApiUsageStatCreateManyApiKeyInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ApiUsageStatWhereUniqueInputSchema),z.lazy(() => ApiUsageStatWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default ApiUsageStatCreateNestedManyWithoutApiKeyInputSchema;
