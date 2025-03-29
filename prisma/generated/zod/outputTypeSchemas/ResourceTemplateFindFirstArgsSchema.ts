import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ResourceTemplateIncludeSchema } from '../inputTypeSchemas/ResourceTemplateIncludeSchema'
import { ResourceTemplateWhereInputSchema } from '../inputTypeSchemas/ResourceTemplateWhereInputSchema'
import { ResourceTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/ResourceTemplateOrderByWithRelationInputSchema'
import { ResourceTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/ResourceTemplateWhereUniqueInputSchema'
import { ResourceTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/ResourceTemplateScalarFieldEnumSchema'
import { MerchantArgsSchema } from "../outputTypeSchemas/MerchantArgsSchema"
import { ResourceFindManyArgsSchema } from "../outputTypeSchemas/ResourceFindManyArgsSchema"
import { ResourceTemplateCountOutputTypeArgsSchema } from "../outputTypeSchemas/ResourceTemplateCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const ResourceTemplateFindFirstArgsSchema: z.ZodType<Prisma.ResourceTemplateFindFirstArgs> = z.object({
  select: ResourceTemplateSelectSchema.optional(),
  include: z.lazy(() => ResourceTemplateIncludeSchema).optional(),
  where: ResourceTemplateWhereInputSchema.optional(),
  orderBy: z.union([ ResourceTemplateOrderByWithRelationInputSchema.array(),ResourceTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: ResourceTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ResourceTemplateScalarFieldEnumSchema,ResourceTemplateScalarFieldEnumSchema.array() ]).optional(),
}).strict() ;

export default ResourceTemplateFindFirstArgsSchema;
