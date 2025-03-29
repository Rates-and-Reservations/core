import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateManyTemplateInputSchema } from './BookingRequestCreateManyTemplateInputSchema';

export const BookingRequestCreateManyTemplateInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestCreateManyTemplateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestCreateManyTemplateInputSchema),z.lazy(() => BookingRequestCreateManyTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestCreateManyTemplateInputEnvelopeSchema;
