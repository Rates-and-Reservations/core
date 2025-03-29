import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateWithoutApiUsageStatInputSchema } from './ApiKeyCreateWithoutApiUsageStatInputSchema';
import { ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema } from './ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema';
import { ApiKeyCreateOrConnectWithoutApiUsageStatInputSchema } from './ApiKeyCreateOrConnectWithoutApiUsageStatInputSchema';
import { ApiKeyUpsertWithoutApiUsageStatInputSchema } from './ApiKeyUpsertWithoutApiUsageStatInputSchema';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';
import { ApiKeyUpdateToOneWithWhereWithoutApiUsageStatInputSchema } from './ApiKeyUpdateToOneWithWhereWithoutApiUsageStatInputSchema';
import { ApiKeyUpdateWithoutApiUsageStatInputSchema } from './ApiKeyUpdateWithoutApiUsageStatInputSchema';
import { ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema } from './ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema';

export const ApiKeyUpdateOneRequiredWithoutApiUsageStatNestedInputSchema: z.ZodType<Prisma.ApiKeyUpdateOneRequiredWithoutApiUsageStatNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutApiUsageStatInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ApiKeyCreateOrConnectWithoutApiUsageStatInputSchema).optional(),
  upsert: z.lazy(() => ApiKeyUpsertWithoutApiUsageStatInputSchema).optional(),
  connect: z.lazy(() => ApiKeyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ApiKeyUpdateToOneWithWhereWithoutApiUsageStatInputSchema),z.lazy(() => ApiKeyUpdateWithoutApiUsageStatInputSchema),z.lazy(() => ApiKeyUncheckedUpdateWithoutApiUsageStatInputSchema) ]).optional(),
}).strict();

export default ApiKeyUpdateOneRequiredWithoutApiUsageStatNestedInputSchema;
