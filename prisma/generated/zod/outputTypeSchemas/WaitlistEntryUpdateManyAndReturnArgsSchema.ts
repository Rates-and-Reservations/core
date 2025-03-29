import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { WaitlistEntryUpdateManyMutationInputSchema } from '../inputTypeSchemas/WaitlistEntryUpdateManyMutationInputSchema'
import { WaitlistEntryUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/WaitlistEntryUncheckedUpdateManyInputSchema'
import { WaitlistEntryWhereInputSchema } from '../inputTypeSchemas/WaitlistEntryWhereInputSchema'

export const WaitlistEntryUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.WaitlistEntryUpdateManyAndReturnArgs> = z.object({
  data: z.union([ WaitlistEntryUpdateManyMutationInputSchema,WaitlistEntryUncheckedUpdateManyInputSchema ]),
  where: WaitlistEntryWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default WaitlistEntryUpdateManyAndReturnArgsSchema;
