import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutBookingRequestActionValueInputSchema } from './BookingRequestCreateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestCreateOrConnectWithoutBookingRequestActionValueInputSchema } from './BookingRequestCreateOrConnectWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUpsertWithoutBookingRequestActionValueInputSchema } from './BookingRequestUpsertWithoutBookingRequestActionValueInputSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema } from './BookingRequestUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUpdateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUpdateWithoutBookingRequestActionValueInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema';

export const BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema: z.ZodType<Prisma.BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingRequestActionValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingRequestCreateOrConnectWithoutBookingRequestActionValueInputSchema).optional(),
  upsert: z.lazy(() => BookingRequestUpsertWithoutBookingRequestActionValueInputSchema).optional(),
  connect: z.lazy(() => BookingRequestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingRequestUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingRequestUpdateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingRequestActionValueInputSchema) ]).optional(),
}).strict();

export default BookingRequestUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema;
