import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInputSchema } from './ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInputSchema';

export const ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema: z.ZodType<Prisma.ApiKeyUncheckedCreateWithoutApiUsageStatInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string(),
  keyHash: z.string(),
  label: z.string().optional().nullable(),
  description: z.string().optional().nullable(),
  scopes: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  isActive: z.boolean().optional(),
  lastUsedAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  ApiUsageLog: z.lazy(() => ApiUsageLogUncheckedCreateNestedManyWithoutApiKeyInputSchema).optional()
}).strict();

export default ApiKeyUncheckedCreateWithoutApiUsageStatInputSchema;
