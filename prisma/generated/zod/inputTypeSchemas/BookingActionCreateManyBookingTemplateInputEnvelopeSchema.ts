import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionCreateManyBookingTemplateInputSchema } from './BookingActionCreateManyBookingTemplateInputSchema';

export const BookingActionCreateManyBookingTemplateInputEnvelopeSchema: z.ZodType<Prisma.BookingActionCreateManyBookingTemplateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingActionCreateManyBookingTemplateInputSchema),z.lazy(() => BookingActionCreateManyBookingTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingActionCreateManyBookingTemplateInputEnvelopeSchema;
