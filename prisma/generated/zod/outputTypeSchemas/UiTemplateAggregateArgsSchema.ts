import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UiTemplateWhereInputSchema } from '../inputTypeSchemas/UiTemplateWhereInputSchema'
import { UiTemplateOrderByWithRelationInputSchema } from '../inputTypeSchemas/UiTemplateOrderByWithRelationInputSchema'
import { UiTemplateWhereUniqueInputSchema } from '../inputTypeSchemas/UiTemplateWhereUniqueInputSchema'

export const UiTemplateAggregateArgsSchema: z.ZodType<Prisma.UiTemplateAggregateArgs> = z.object({
  where: UiTemplateWhereInputSchema.optional(),
  orderBy: z.union([ UiTemplateOrderByWithRelationInputSchema.array(),UiTemplateOrderByWithRelationInputSchema ]).optional(),
  cursor: UiTemplateWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default UiTemplateAggregateArgsSchema;
