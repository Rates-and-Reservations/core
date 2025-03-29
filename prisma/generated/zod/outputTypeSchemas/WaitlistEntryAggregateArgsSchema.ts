import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistEntryWhereInputSchema } from '../inputTypeSchemas/WaitlistEntryWhereInputSchema'
import { WaitlistEntryOrderByWithRelationInputSchema } from '../inputTypeSchemas/WaitlistEntryOrderByWithRelationInputSchema'
import { WaitlistEntryWhereUniqueInputSchema } from '../inputTypeSchemas/WaitlistEntryWhereUniqueInputSchema'

export const WaitlistEntryAggregateArgsSchema: z.ZodType<Prisma.WaitlistEntryAggregateArgs> = z.object({
  where: WaitlistEntryWhereInputSchema.optional(),
  orderBy: z.union([ WaitlistEntryOrderByWithRelationInputSchema.array(),WaitlistEntryOrderByWithRelationInputSchema ]).optional(),
  cursor: WaitlistEntryWhereUniqueInputSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict() ;

export default WaitlistEntryAggregateArgsSchema;
