import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactWhereInputSchema } from '../inputTypeSchemas/MerchantContactWhereInputSchema'

export const MerchantContactDeleteManyArgsSchema: z.ZodType<Prisma.MerchantContactDeleteManyArgs> = z.object({
  where: MerchantContactWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MerchantContactDeleteManyArgsSchema;
