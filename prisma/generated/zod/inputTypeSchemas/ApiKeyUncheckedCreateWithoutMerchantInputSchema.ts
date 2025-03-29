import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInputSchema';
import { ApiUsageStatUncheckedCreateNestedManyWithoutApiKeyInputSchema } from './ApiUsageStatUncheckedCreateNestedManyWithoutApiKeyInputSchema';

export const ApiKeyUncheckedCreateWithoutMerchantInputSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  keyHash: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  scopes: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isActive: z.boolean().optional(),
  lastUsedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInputSchema).optional(),
  ApiUsageStat: z.lazy(() => ApiUsageStatUncheckedCreateNestedManyWithoutApiKeyInputSchema).optional()
}).strict();

export default ApiKeyUncheckedCreateWithoutMerchantInputSchema;
