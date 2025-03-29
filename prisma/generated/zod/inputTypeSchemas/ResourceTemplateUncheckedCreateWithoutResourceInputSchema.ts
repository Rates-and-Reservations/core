import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';

export const ResourceTemplateUncheckedCreateWithoutResourceInputSchema: z.ZodType<Prisma.ResourceTemplateUncheckedCreateWithoutResourceInput> = z.object({
  id: z.string().cuid().optional(),
  merchantId: z.string().optional().nullable(),
  name: z.string(),
  category: z.string(),
  description: z.string().optional().nullable(),
  defaultFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ResourceTemplateUncheckedCreateWithoutResourceInputSchema;
