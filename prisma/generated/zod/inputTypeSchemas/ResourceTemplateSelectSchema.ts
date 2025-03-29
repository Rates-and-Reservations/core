import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceFindManyArgsSchema } from "../outputTypeSchemas/ResourceFindManyArgsSchema"
import { ResourceTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/ResourceTemplateCountOutputTypeArgsSchema"

export const ResourceTemplateSelectSchema: z.ZodType<Prisma.ResourceTemplateSelect> = z.object({
  id: z.boolean().optional(),
  merchantId: z.boolean().optional(),
  name: z.boolean().optional(),
  category: z.boolean().optional(),
  description: z.boolean().optional(),
  defaultFields: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  merchant: z.union([z.boolean(),z.lazy(() => MerchantArgsSchema)]).optional(),
  Resource: z.union([z.boolean(),z.lazy(() => ResourceFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ResourceTemplateCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ResourceTemplateSelectSchema;
