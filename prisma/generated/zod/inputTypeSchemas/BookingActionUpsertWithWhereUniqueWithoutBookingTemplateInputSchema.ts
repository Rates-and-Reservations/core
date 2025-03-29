import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionWhereUniqueInputSchema } from './BookingActionWhereUniqueInputSchema';
import { BookingActionUpdateWithoutBookingTemplateInputSchema } from './BookingActionUpdateWithoutBookingTemplateInputSchema';
import { BookingActionUncheckedUpdateWithoutBookingTemplateInputSchema } from './BookingActionUncheckedUpdateWithoutBookingTemplateInputSchema';
import { BookingActionCreateWithoutBookingTemplateInputSchema } from './BookingActionCreateWithoutBookingTemplateInputSchema';
import { BookingActionUncheckedCreateWithoutBookingTemplateInputSchema } from './BookingActionUncheckedCreateWithoutBookingTemplateInputSchema';

export const BookingActionUpsertWithWhereUniqueWithoutBookingTemplateInputSchema: z.ZodType<Prisma.BookingActionUpsertWithWhereUniqueWithoutBookingTemplateInput> = z.object({
  where: z.lazy(() => BookingActionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingActionUpdateWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUncheckedUpdateWithoutBookingTemplateInputSchema) ]),
  create: z.union([ z.lazy(() => BookingActionCreateWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUncheckedCreateWithoutBookingTemplateInputSchema) ]),
}).strict();

export default BookingActionUpsertWithWhereUniqueWithoutBookingTemplateInputSchema;
