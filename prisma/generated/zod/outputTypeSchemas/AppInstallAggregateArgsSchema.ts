import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallWhereInputSchema } from '../inputTypeSchemas/AppInstallWhereInputSchema'
import { AppInstallOrderByWithRelationInputSchema } from '../inputTypeSchemas/AppInstallOrderByWithRelationInputSchema'
import { AppInstallWhereUniqueInputSchema } from '../inputTypeSchemas/AppInstallWhereUniqueInputSchema'

export const AppInstallAggregateArgsSchema: z.ZodType<Prisma.AppInstallAggregateArgs> = z.object({
  where: AppInstallWhereInputSchema.optional(),
  orderBy: z.union([ AppInstallOrderByWithRelationInputSchema.array(),AppInstallOrderByWithRelationInputSchema ]).optional(),
  cursor: AppInstallWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AppInstallAggregateArgsSchema;
