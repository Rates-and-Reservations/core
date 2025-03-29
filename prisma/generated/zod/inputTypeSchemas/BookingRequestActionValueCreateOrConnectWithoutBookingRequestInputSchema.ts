import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestActionValueWhereUniqueInputSchema } from './BookingRequestActionValueWhereUniqueInputSchema';
import { BookingRequestActionValueCreateWithoutBookingRequestInputSchema } from './BookingRequestActionValueCreateWithoutBookingRequestInputSchema';
import { BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema } from './BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema';

export const BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema: z.ZodType<Prisma.BookingRequestActionValueCreateOrConnectWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => BookingRequestActionValueWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingRequestActionValueCreateWithoutBookingRequestInputSchema),z.lazy(() => BookingRequestActionValueUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default BookingRequestActionValueCreateOrConnectWithoutBookingRequestInputSchema;
