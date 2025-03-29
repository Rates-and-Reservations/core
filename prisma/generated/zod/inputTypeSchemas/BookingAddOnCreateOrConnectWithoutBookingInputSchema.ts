import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingAddOnWhereUniqueInputSchema } from './BookingAddOnWhereUniqueInputSchema';
import { BookingAddOnCreateWithoutBookingInputSchema } from './BookingAddOnCreateWithoutBookingInputSchema';
import { BookingAddOnUncheckedCreateWithoutBookingInputSchema } from './BookingAddOnUncheckedCreateWithoutBookingInputSchema';

export const BookingAddOnCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.BookingAddOnCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => BookingAddOnWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BookingAddOnCreateWithoutBookingInputSchema),z.lazy(() => BookingAddOnUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default BookingAddOnCreateOrConnectWithoutBookingInputSchema;
