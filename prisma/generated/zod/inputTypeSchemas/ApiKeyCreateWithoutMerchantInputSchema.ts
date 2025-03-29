import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ApiUsageLogCreateNestedManyWithoutApiKeyInputSchema } from './ApiUsageLogCreateNestedManyWithoutApiKeyInputSchema';
import { ApiUsageStatCreateNestedManyWithoutApiKeyInputSchema } from './ApiUsageStatCreateNestedManyWithoutApiKeyInputSchema';

export const ApiKeyCreateWithoutMerchantInputSchema: z.ZodType<Prisma.ApiKeyCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  keyHash: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  scopes: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isActive: z.boolean().optional(),
  lastUsedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogCreateNestedManyWithoutApiKeyInputSchema).optional(),
  ApiUsageStat: z.lazy(() => ApiUsageStatCreateNestedManyWithoutApiKeyInputSchema).optional()
}).strict();

export default ApiKeyCreateWithoutMerchantInputSchema;
