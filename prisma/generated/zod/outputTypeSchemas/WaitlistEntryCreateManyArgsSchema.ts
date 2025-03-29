import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistEntryCreateManyInputSchema } from '../inputTypeSchemas/WaitlistEntryCreateManyInputSchema'

export const WaitlistEntryCreateManyArgsSchema: z.ZodType<Prisma.WaitlistEntryCreateManyArgs> = z.object({
  data: z.union([ WaitlistEntryCreateManyInputSchema,WaitlistEntryCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default WaitlistEntryCreateManyArgsSchema;
