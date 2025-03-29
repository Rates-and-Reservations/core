import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantUserWhereInputSchema } from '../inputTypeSchemas/MerchantUserWhereInputSchema'

export const MerchantUserDeleteManyArgsSchema: z.ZodType<Prisma.MerchantUserDeleteManyArgs> = z.object({
  where: MerchantUserWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MerchantUserDeleteManyArgsSchema;
