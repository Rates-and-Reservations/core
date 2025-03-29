import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateManyUiTemplateInputSchema } from './BookingRequestFlowCreateManyUiTemplateInputSchema';

export const BookingRequestFlowCreateManyUiTemplateInputEnvelopeSchema: z.ZodType<Prisma.BookingRequestFlowCreateManyUiTemplateInputEnvelope> = z.object({
  data: z.union([ z.lazy(() => BookingRequestFlowCreateManyUiTemplateInputSchema),z.lazy(() => BookingRequestFlowCreateManyUiTemplateInputSchema).array() ]),
  skipDuplicates: z.boolean().optional()
}).strict();

export default BookingRequestFlowCreateManyUiTemplateInputEnvelopeSchema;
