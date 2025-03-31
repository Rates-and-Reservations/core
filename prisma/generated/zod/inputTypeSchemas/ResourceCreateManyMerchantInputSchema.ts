import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NullableJsonNullValueInputSchema } from './NullableJsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { ResourceCreatetagsInputSchema } from './ResourceCreatetagsInputSchema';

export const ResourceCreateManyMerchantInputSchema: z.ZodType<Prisma.ResourceCreateManyMerchantInput> = z.object({
  id: z.string().cuid().optional(),
  templateId: z.string(),
  name: z.string(),
  description: z.string().optional().nullable(),
  capacity: z.number().int(),
  metadata: z.union([ z.lazy(() => NullableJsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  tags: z.union([ z.lazy(() => ResourceCreatetagsInputSchema),z.string().array() ]).optional(),
  isActive: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional()
}).strict();

export default ResourceCreateManyMerchantInputSchema;
