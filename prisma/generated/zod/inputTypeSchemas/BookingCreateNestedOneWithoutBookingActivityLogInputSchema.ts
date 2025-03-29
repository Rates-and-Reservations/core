import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutBookingActivityLogInputSchema } from './BookingCreateWithoutBookingActivityLogInputSchema';
import { BookingUncheckedCreateWithoutBookingActivityLogInputSchema } from './BookingUncheckedCreateWithoutBookingActivityLogInputSchema';
import { BookingCreateOrConnectWithoutBookingActivityLogInputSchema } from './BookingCreateOrConnectWithoutBookingActivityLogInputSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedOneWithoutBookingActivityLogInputSchema: z.ZodType<Prisma.BookingCreateNestedOneWithoutBookingActivityLogInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutBookingActivityLogInputSchema),z.lazy(() => BookingUncheckedCreateWithoutBookingActivityLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingCreateOrConnectWithoutBookingActivityLogInputSchema).optional(),
  connect: z.lazy(() => BookingWhereUniqueInputSchema).optional()
}).strict();

export default BookingCreateNestedOneWithoutBookingActivityLogInputSchema;
