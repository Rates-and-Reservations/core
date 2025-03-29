import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionCreateWithoutBookingRequestActionValueInputSchema } from './BookingActionCreateWithoutBookingRequestActionValueInputSchema';
import { BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema } from './BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema';
import { BookingActionCreateOrConnectWithoutBookingRequestActionValueInputSchema } from './BookingActionCreateOrConnectWithoutBookingRequestActionValueInputSchema';
import { BookingActionWhereUniqueInputSchema } from './BookingActionWhereUniqueInputSchema';

export const BookingActionCreateNestedOneWithoutBookingRequestActionValueInputSchema: z.ZodType<Prisma.BookingActionCreateNestedOneWithoutBookingRequestActionValueInput> = z.object({
  create: z.union([ z.lazy(() => BookingActionCreateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingActionCreateOrConnectWithoutBookingRequestActionValueInputSchema).optional(),
  connect: z.lazy(() => BookingActionWhereUniqueInputSchema).optional()
}).strict();

export default BookingActionCreateNestedOneWithoutBookingRequestActionValueInputSchema;
