import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ResourceCreateNestedManyWithoutTemplateInputSchema } from './ResourceCreateNestedManyWithoutTemplateInputSchema';

export const ResourceTemplateCreateWithoutMerchantInputSchema: z.ZodType<Prisma.ResourceTemplateCreateWithoutMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  name: z.string(),
  category: z.string(),
  description: z.string().optional().nullable(),
  defaultFields: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  Resource: z.lazy(() => ResourceCreateNestedManyWithoutTemplateInputSchema).optional()
}).strict();

export default ResourceTemplateCreateWithoutMerchantInputSchema;
