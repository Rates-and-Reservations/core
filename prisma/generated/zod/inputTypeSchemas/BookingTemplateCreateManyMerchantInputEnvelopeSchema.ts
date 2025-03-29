import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateCreateManyMerchantInputSchema } from './BookingTemplateCreateManyMerchantInputSchema';

export const BookingTemplateCreateManyMerchantInputEnvelopeSchema: z.ZodType<Prisma.BookingTemplateCreateManyMerchantInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingTemplateCreateManyMerchantInputSchema),z.lazy(() => BookingTemplateCreateManyMerchantInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingTemplateCreateManyMerchantInputEnvelopeSchema;
