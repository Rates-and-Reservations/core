import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateWhereInputSchema } from '../inputTypeSchemas/UiTemplateWhereInputSchema'
import { UiTemplateOrderByWithAggregationInputSchema } from '../inputTypeSchemas/UiTemplateOrderByWithAggregationInputSchema'
import { UiTemplateScalarFieldEnumSchema } from '../inputTypeSchemas/UiTemplateScalarFieldEnumSchema'
import { UiTemplateScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/UiTemplateScalarWhereWithAggregatesInputSchema'

export const UiTemplateGroupByArgsSchema: z.ZodType<Prisma.UiTemplateGroupByArgs> = z.object({
  where: UiTemplateWhereInputSchema.optional(),
  orderBy: z.union([ UiTemplateOrderByWithAggregationInputSchema.array(),UiTemplateOrderByWithAggregationInputSchema ]).optional(),
  by: UiTemplateScalarFieldEnumSchema.array(),
  having: UiTemplateScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UiTemplateGroupByArgsSchema;
