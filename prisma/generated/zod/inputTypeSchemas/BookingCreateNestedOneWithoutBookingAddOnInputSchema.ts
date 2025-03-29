import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutBookingAddOnInputSchema } from './BookingCreateWithoutBookingAddOnInputSchema';
import { BookingUncheckedCreateWithoutBookingAddOnInputSchema } from './BookingUncheckedCreateWithoutBookingAddOnInputSchema';
import { BookingCreateOrConnectWithoutBookingAddOnInputSchema } from './BookingCreateOrConnectWithoutBookingAddOnInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedOneWithoutBookingAddOnInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutBookingAddOnInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingAddOnInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutBookingAddOnInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export default BookingCreateNestedOneWithoutBookingAddOnInputSchema;
