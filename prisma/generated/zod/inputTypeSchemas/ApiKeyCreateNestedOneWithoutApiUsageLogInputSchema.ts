import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateWithoutApiUsageLogInputSchema } from './ApiKeyCreateWithoutApiUsageLogInputSchema';
import { ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema } from './ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema';
import { ApiKeyCreateOrConnectWithoutApiUsageLogInputSchema } from './ApiKeyCreateOrConnectWithoutApiUsageLogInputSchema';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';

export const ApiKeyCreateNestedOneWithoutApiUsageLogInputSchema: z.ZodType<Prisma.ApiKeyCreateNestedOneWithoutApiUsageLogInput> = z.object({
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutApiUsageLogInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ApiKeyCreateOrConnectWithoutApiUsageLogInputSchema).optional(),
  connect: z.lazy(() => ApiKeyWhereUniqueInputSchema).optional()
}).strict();

export default ApiKeyCreateNestedOneWithoutApiUsageLogInputSchema;
