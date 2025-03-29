import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { AppInstallWhereInputSchema } from '../inputTypeSchemas/AppInstallWhereInputSchema'
import { AppInstallOrderByWithAggregationInputSchema } from '../inputTypeSchemas/AppInstallOrderByWithAggregationInputSchema'
import { AppInstallScalarFieldEnumSchema } from '../inputTypeSchemas/AppInstallScalarFieldEnumSchema'
import { AppInstallScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/AppInstallScalarWhereWithAggregatesInputSchema'

export const AppInstallGroupByArgsSchema: z.ZodType<Prisma.AppInstallGroupByArgs> = z.object({
  where: AppInstallWhereInputSchema.optional(),
  orderBy: z.union([ AppInstallOrderByWithAggregationInputSchema.array(),AppInstallOrderByWithAggregationInputSchema ]).optional(),
  by: AppInstallScalarFieldEnumSchema.array(),
  having: AppInstallScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default AppInstallGroupByArgsSchema;
