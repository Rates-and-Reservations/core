import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateWithoutApiUsageStatInputSchema } from './ApiKeyCreateWithoutApiUsageStatInputSchema';
import { ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema } from './ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema';
import { ApiKeyCreateOrConnectWithoutApiUsageStatInputSchema } from './ApiKeyCreateOrConnectWithoutApiUsageStatInputSchema';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';

export const ApiKeyCreateNestedOneWithoutApiUsageStatInputSchema: z.ZodType<Prisma.ApiKeyCreateNestedOneWithoutApiUsageStatInput> = z.object({
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutApiUsageStatInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ApiKeyCreateOrConnectWithoutApiUsageStatInputSchema).optional(),
  connect: z.lazy(() => ApiKeyWhereUniqueInputSchema).optional()
}).strict();

export default ApiKeyCreateNestedOneWithoutApiUsageStatInputSchema;
