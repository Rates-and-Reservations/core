import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingTemplateCreateWithoutBookingRequestInputSchema } from './BookingTemplateCreateWithoutBookingRequestInputSchema';
import { BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema } from './BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema';
import { BookingTemplateCreateOrConnectWithoutBookingRequestInputSchema } from './BookingTemplateCreateOrConnectWithoutBookingRequestInputSchema';
import { BookingTemplateWhereUniqueInputSchema } from './BookingTemplateWhereUniqueInputSchema';

export const BookingTemplateCreateNestedOneWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingTemplateCreateNestedOneWithoutBookingRequestInput> = z.object({
  create: z.union([ z.lazy(() => BookingTemplateCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingTemplateUncheckedCreateWithoutBookingRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingTemplateCreateOrConnectWithoutBookingRequestInputSchema).optional(),
  connect: z.lazy(() => BookingTemplateWhereUniqueInputSchema).optional()
}).strict();

export default BookingTemplateCreateNestedOneWithoutBookingRequestInputSchema;
