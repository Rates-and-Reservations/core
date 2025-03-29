import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantCreateManyInputSchema } from '../inputTypeSchemas/MerchantCreateManyInputSchema'

export const MerchantCreateManyArgsSchema: z.ZodType<Prisma.MerchantCreateManyArgs> = z.object({
  data: z.union([ MerchantCreateManyInputSchema,MerchantCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MerchantCreateManyArgsSchema;
