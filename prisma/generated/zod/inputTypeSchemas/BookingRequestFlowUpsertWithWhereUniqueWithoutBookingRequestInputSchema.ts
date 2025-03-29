import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithoutBookingRequestInputSchema } from './BookingRequestFlowUpdateWithoutBookingRequestInputSchema';
import { BookingRequestFlowUncheckedUpdateWithoutBookingRequestInputSchema } from './BookingRequestFlowUncheckedUpdateWithoutBookingRequestInputSchema';
import { BookingRequestFlowCreateWithoutBookingRequestInputSchema } from './BookingRequestFlowCreateWithoutBookingRequestInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema } from './BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema';

export const BookingRequestFlowUpsertWithWhereUniqueWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestFlowUpsertWithWhereUniqueWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestFlowUpdateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUncheckedUpdateWithoutBookingRequestInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingRequestFlowUpsertWithWhereUniqueWithoutBookingRequestInputSchema;
