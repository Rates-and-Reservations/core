import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantSelectSchema } from '../inputTypeSchemas/MerchantSelectSchema';
import { MerchantIncludeSchema } from '../inputTypeSchemas/MerchantIncludeSchema';

export const MerchantArgsSchema: z.ZodType<Prisma.MerchantDefaultArgs> = z.object({
  select: z.lazy(() => MerchantSelectSchema).optional(),
  include: z.lazy(() => MerchantIncludeSchema).optional(),
}).strict();

export default MerchantArgsSchema;
