import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionWhereUniqueInputSchema } from './BookingActionWhereUniqueInputSchema';
import { BookingActionCreateWithoutBookingTemplateInputSchema } from './BookingActionCreateWithoutBookingTemplateInputSchema';
import { BookingActionUncheckedCreateWithoutBookingTemplateInputSchema } from './BookingActionUncheckedCreateWithoutBookingTemplateInputSchema';

export const BookingActionCreateOrConnectWithoutBookingTemplateInputSchema: z.ZodType<Prisma.BookingActionCreateOrConnectWithoutBookingTemplateInput> = z.object({
  where: z.lazy(() => BookingActionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingActionCreateWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUncheckedCreateWithoutBookingTemplateInputSchema) ]),
}).strict();

export default BookingActionCreateOrConnectWithoutBookingTemplateInputSchema;
