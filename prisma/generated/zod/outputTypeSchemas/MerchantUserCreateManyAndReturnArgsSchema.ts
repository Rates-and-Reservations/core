import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserCreateManyInputSchema } from '../inputTypeSchemas/MerchantUserCreateManyInputSchema'

export const MerchantUserCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MerchantUserCreateManyAndReturnArgs> = z.object({
  data: z.union([ MerchantUserCreateManyInputSchema,MerchantUserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MerchantUserCreateManyAndReturnArgsSchema;
