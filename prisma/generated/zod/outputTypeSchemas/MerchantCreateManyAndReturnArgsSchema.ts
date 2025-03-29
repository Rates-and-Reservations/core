import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantCreateManyInputSchema } from '../inputTypeSchemas/MerchantCreateManyInputSchema'

export const MerchantCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MerchantCreateManyAndReturnArgs> = z.object({
  data: z.union([ MerchantCreateManyInputSchema,MerchantCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MerchantCreateManyAndReturnArgsSchema;
