import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserCreateManyInputSchema } from '../inputTypeSchemas/MerchantUserCreateManyInputSchema'

export const MerchantUserCreateManyArgsSchema: z.ZodType<Prisma.MerchantUserCreateManyArgs> = z.object({
  data: z.union([ MerchantUserCreateManyInputSchema,MerchantUserCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MerchantUserCreateManyArgsSchema;
