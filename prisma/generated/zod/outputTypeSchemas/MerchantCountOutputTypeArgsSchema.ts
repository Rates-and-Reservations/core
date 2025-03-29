import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { MerchantCountOutputTypeSelectSchema } from './MerchantCountOutputTypeSelectSchema';

export const MerchantCountOutputTypeArgsSchema: z.ZodType<Prisma.MerchantCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => MerchantCountOutputTypeSelectSchema).nullish(),
}).strict();

export default MerchantCountOutputTypeSelectSchema;
