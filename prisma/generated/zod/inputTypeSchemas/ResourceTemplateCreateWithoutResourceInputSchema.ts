import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { MerchantCreateNestedOneWithoutResourceTemplateInputSchema } from './MerchantCreateNestedOneWithoutResourceTemplateInputSchema';

export const ResourceTemplateCreateWithoutResourceInputSchema: z.ZodType<Prisma.ResourceTemplateCreateWithoutResourceInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  category: z.string(),
  description: z.string().optional().nullable(),
  defaultFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  merchant: z.lazy(() => MerchantCreateNestedOneWithoutResourceTemplateInputSchema).optional()
}).strict();

export default ResourceTemplateCreateWithoutResourceInputSchema;
