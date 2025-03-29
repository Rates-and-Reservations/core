import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantWhereInputSchema } from '../inputTypeSchemas/MerchantWhereInputSchema'

export const MerchantDeleteManyArgsSchema: z.ZodType<Prisma.MerchantDeleteManyArgs> = z.object({
  where: MerchantWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MerchantDeleteManyArgsSchema;
