import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetWhereInputSchema } from '../inputTypeSchemas/MerchantAssetWhereInputSchema'

export const MerchantAssetDeleteManyArgsSchema: z.ZodType<Prisma.MerchantAssetDeleteManyArgs> = z.object({
  where: MerchantAssetWhereInputSchema.optional(),
  limit: z.number().optional(),
}).strict() ;

export default MerchantAssetDeleteManyArgsSchema;
