import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantContactSelectSchema } from '../inputTypeSchemas/MerchantContactSelectSchema';
import { MerchantContactIncludeSchema } from '../inputTypeSchemas/MerchantContactIncludeSchema';

export const MerchantContactArgsSchema: z.ZodType<Prisma.MerchantContactDefaultArgs> = z.object({
  select: z.lazy(() => MerchantContactSelectSchema).optional(),
  include: z.lazy(() => MerchantContactIncludeSchema).optional(),
}).strict();

export default MerchantContactArgsSchema;
