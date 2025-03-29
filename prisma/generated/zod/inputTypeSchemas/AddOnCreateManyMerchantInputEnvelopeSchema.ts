import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { AddOnCreateManyMerchantInputSchema } from './AddOnCreateManyMerchantInputSchema';

export const AddOnCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.AddOnCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => AddOnCreateManyMerchantInputSchema),z.lazy(() => AddOnCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default AddOnCreateManyMerchantInputEnvelopeSchema;
