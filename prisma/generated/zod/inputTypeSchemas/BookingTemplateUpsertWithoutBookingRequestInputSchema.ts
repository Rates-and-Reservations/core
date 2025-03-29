import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateUpdateWithoutBookingRequestInputSchema } from './BookingTemplateUpdateWithoutBookingRequestInputSchema';
import { BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema';
import { BookingTemplateCreateWithoutBookingRequestInputSchema } from './BookingTemplateCreateWithoutBookingRequestInputSchema';
import { BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema } from './BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingTemplateWhereInputSchema } from './BookingTemplateWhereInputSchema';

export const BookingTemplateUpsertWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingTemplateUpsertWithoutBookingRequestInput> = z.object({
  update: z.union([ z.lazy(() => BookingTemplateUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema) ]),
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema) ]),
  where: z.lazy(() => BookingTemplateWhereInputSchema).optional()
}).strict();

export default BookingTemplateUpsertWithoutBookingRequestInputSchema;
