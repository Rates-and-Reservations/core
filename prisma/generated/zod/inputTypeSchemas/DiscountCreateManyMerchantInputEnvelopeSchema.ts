import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { DiscountCreateManyMerchantInputSchema } from './DiscountCreateManyMerchantInputSchema';

export const DiscountCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.DiscountCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => DiscountCreateManyMerchantInputSchema),z.lazy(() => DiscountCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default DiscountCreateManyMerchantInputEnvelopeSchema;
