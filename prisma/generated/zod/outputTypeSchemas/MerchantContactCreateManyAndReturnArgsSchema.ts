import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactCreateManyInputSchema } from '../inputTypeSchemas/MerchantContactCreateManyInputSchema'

export const MerchantContactCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MerchantContactCreateManyAndReturnArgs> = z.object({
  data: z.union([ MerchantContactCreateManyInputSchema,MerchantContactCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MerchantContactCreateManyAndReturnArgsSchema;
