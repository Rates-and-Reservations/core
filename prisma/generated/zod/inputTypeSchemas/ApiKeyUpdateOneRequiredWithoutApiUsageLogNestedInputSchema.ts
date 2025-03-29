import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ApiKeyCreateWithoutApiUsageLogInputSchema } from './ApiKeyCreateWithoutApiUsageLogInputSchema';
import { ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema } from './ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema';
import { ApiKeyCreateOrConnectWithoutApiUsageLogInputSchema } from './ApiKeyCreateOrConnectWithoutApiUsageLogInputSchema';
import { ApiKeyUpsertWithoutApiUsageLogInputSchema } from './ApiKeyUpsertWithoutApiUsageLogInputSchema';
import { ApiKeyWhereUniqueInputSchema } from './ApiKeyWhereUniqueInputSchema';
import { ApiKeyUpdateToOneWithWhereWithoutApiUsageLogInputSchema } from './ApiKeyUpdateToOneWithWhereWithoutApiUsageLogInputSchema';
import { ApiKeyUpdateWithoutApiUsageLogInputSchema } from './ApiKeyUpdateWithoutApiUsageLogInputSchema';
import { ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema } from './ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema';

export const ApiKeyUpdateOneRequiredWithoutApiUsageLogNestedInputSchema: z.ZodType<Prisma.ApiKeyUpdateOneRequiredWithoutApiUsageLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => ApiKeyCreateWithoutApiUsageLogInputSchema),z.lazy(() => ApiKeyUncheckedCreateWithoutApiUsageLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ApiKeyCreateOrConnectWithoutApiUsageLogInputSchema).optional(),
  upsert: z.lazy(() => ApiKeyUpsertWithoutApiUsageLogInputSchema).optional(),
  connect: z.lazy(() => ApiKeyWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ApiKeyUpdateToOneWithWhereWithoutApiUsageLogInputSchema),z.lazy(() => ApiKeyUpdateWithoutApiUsageLogInputSchema),z.lazy(() => ApiKeyUncheckedUpdateWithoutApiUsageLogInputSchema) ]).optional(),
}).strict();

export default ApiKeyUpdateOneRequiredWithoutApiUsageLogNestedInputSchema;
