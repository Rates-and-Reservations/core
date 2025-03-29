import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetCreateManyInputSchema } from '../inputTypeSchemas/MerchantAssetCreateManyInputSchema'

export const MerchantAssetCreateManyArgsSchema: z.ZodType<Prisma.MerchantAssetCreateManyArgs> = z.object({
  data: z.union([ MerchantAssetCreateManyInputSchema,MerchantAssetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MerchantAssetCreateManyArgsSchema;
