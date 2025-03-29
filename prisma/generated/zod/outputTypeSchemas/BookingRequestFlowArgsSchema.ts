import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BookingRequestFlowSelectSchema } from '../inputTypeSchemas/BookingRequestFlowSelectSchema';
import { BookingRequestFlowIncludeSchema } from '../inputTypeSchemas/BookingRequestFlowIncludeSchema';

export const BookingRequestFlowArgsSchema: z.ZodType<Prisma.BookingRequestFlowDefaultArgs> = z.object({
  select: z.lazy(() => BookingRequestFlowSelectSchema).optional(),
  include: z.lazy(() => BookingRequestFlowIncludeSchema).optional(),
}).strict();

export default BookingRequestFlowArgsSchema;
