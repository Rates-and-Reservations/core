import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CustomerCreateManyMerchantInputSchema } from './CustomerCreateManyMerchantInputSchema';

export const CustomerCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.CustomerCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => CustomerCreateManyMerchantInputSchema),z.lazy(() => CustomerCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default CustomerCreateManyMerchantInputEnvelopeSchema;
