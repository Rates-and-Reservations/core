import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';
import { BookingTemplateCreateWithoutBookingRequestInputSchema } from './BookingTemplateCreateWithoutBookingRequestInputSchema';
import { BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema } from './BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema';

export const BookingTemplateCreateOrConnectWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingTemplateCreateOrConnectWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingTemplateWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingTemplateCreateOrConnectWithoutBookingRequestInputSchema;
