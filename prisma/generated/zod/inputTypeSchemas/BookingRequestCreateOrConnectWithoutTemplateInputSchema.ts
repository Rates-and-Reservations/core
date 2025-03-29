import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestCreateWithoutTemplateInputSchema } from './BookingRequestCreateWithoutTemplateInputSchema';
import { BookingRequestUncheckedCreateWithoutTemplateInputSchema } from './BookingRequestUncheckedCreateWithoutTemplateInputSchema';

export const BookingRequestCreateOrConnectWithoutTemplateInputSchema: z.ZodType<Prisma.BookingRequestCreateOrConnectWithoutTemplateInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutTemplateInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutTemplateInputSchema) ]),
}).strict();

export default BookingRequestCreateOrConnectWithoutTemplateInputSchema;
