import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereInputSchema } from './BookingTemplateWhereInputSchema';
import { BookingTemplateUpdateWithoutBookingRequestInputSchema } from './BookingTemplateUpdateWithoutBookingRequestInputSchema';
import { BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema';

export const BookingTemplateUpdateToOneWithWhereWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingTemplateUpdateToOneWithWhereWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingTemplateWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BookingTemplateUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingTemplateUncheckedUpdateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingTemplateUpdateToOneWithWhereWithoutBookingRequestInputSchema;
