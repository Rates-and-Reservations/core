import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetCreateManyInputSchema } from '../inputTypeSchemas/MerchantAssetCreateManyInputSchema'

export const MerchantAssetCreateManyAndReturnArgsSchema: z.ZodType<Prisma.MerchantAssetCreateManyAndReturnArgs> = z.object({
  data: z.union([ MerchantAssetCreateManyInputSchema,MerchantAssetCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict() ;

export default MerchantAssetCreateManyAndReturnArgsSchema;
