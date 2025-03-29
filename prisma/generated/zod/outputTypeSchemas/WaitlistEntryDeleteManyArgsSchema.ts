import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistEntryWhereInputSchema } from '../inputTypeSchemas/WaitlistEntryWhereInputSchema'

export const WaitlistEntryDeleteManyArgsSchema: z.ZodType<Prisma.WaitlistEntryDeleteManyArgs> = z.object({
  where: WaitlistEntryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WaitlistEntryDeleteManyArgsSchema;
