import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantAssetCountOutputTypeSelectSchema } from './MerchantAssetCountOutputTypeSelectSchema';

export const MerchantAssetCountOutputTypeArgsSchema: z.ZodType<Prisma.MerchantAssetCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MerchantAssetCountOutputTypeSelectSchema).nullish(),
}).strict();

export default MerchantAssetCountOutputTypeSelectSchema;
