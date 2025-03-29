import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UiTemplateCreateManyMerchantInputSchema } from './UiTemplateCreateManyMerchantInputSchema';

export const UiTemplateCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.UiTemplateCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => UiTemplateCreateManyMerchantInputSchema),z.lazy(() => UiTemplateCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default UiTemplateCreateManyMerchantInputEnvelopeSchema;
