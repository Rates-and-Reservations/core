import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowCreateWithoutUiTemplateInputSchema } from './BookingRequestFlowCreateWithoutUiTemplateInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema } from './BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema';

export const BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema: z.ZodType<Prisma.BookingRequestFlowCreateOrConnectWithoutUiTemplateInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema) ]),
}).strict();

export default BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema;
