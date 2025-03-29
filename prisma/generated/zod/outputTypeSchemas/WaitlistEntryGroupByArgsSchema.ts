import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistEntryWhereInputSchema } from '../inputTypeSchemas/WaitlistEntryWhereInputSchema'
import { WaitlistEntryOrderByWithAggregationInputSchema } from '../inputTypeSchemas/WaitlistEntryOrderByWithAggregationInputSchema'
import { WaitlistEntryScalarFieldEnumSchema } from '../inputTypeSchemas/WaitlistEntryScalarFieldEnumSchema'
import { WaitlistEntryScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/WaitlistEntryScalarWhereWithAggregatesInputSchema'

export const WaitlistEntryGroupByArgsSchema: z.ZodType<Prisma.WaitlistEntryGroupByArgs> = z.object({
  where: WaitlistEntryWhereInputSchema.optional(),
  orderBy: z.union([ WaitlistEntryOrderByWithAggregationInputSchema.array(),WaitlistEntryOrderByWithAggregationInputSchema ]).optional(),
  by: WaitlistEntryScalarFieldEnumSchema.array(),
  having: WaitlistEntryScalarWhereWithAggregatesInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WaitlistEntryGroupByArgsSchema;
