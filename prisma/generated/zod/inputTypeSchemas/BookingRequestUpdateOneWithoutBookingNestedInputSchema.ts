import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutBookingInputSchema } from './BookingRequestCreateWithoutBookingInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingInputSchema } from './BookingRequestUncheckedCreateWithoutBookingInputSchema';
import { BookingRequestCreateOrConnectWithoutBookingInputSchema } from './BookingRequestCreateOrConnectWithoutBookingInputSchema';
import { BookingRequestUpsertWithoutBookingInputSchema } from './BookingRequestUpsertWithoutBookingInputSchema';
import { BookingRequestWhereInputSchema } from './BookingRequestWhereInputSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateToOneWithWhereWithoutBookingInputSchema } from './BookingRequestUpdateToOneWithWhereWithoutBookingInputSchema';
import { BookingRequestUpdateWithoutBookingInputSchema } from './BookingRequestUpdateWithoutBookingInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingInputSchema';

export const BookingRequestUpdateOneWithoutBookingNestedInputSchema: z.ZodType<Prisma.BookingRequestUpdateOneWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingRequestCreateOrConnectWithoutBookingInputSchema).optional(),
  upsert: z.lazy(() => BookingRequestUpsertWithoutBookingInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => BookingRequestWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => BookingRequestWhereInputSchema) ]).optional(),
  connect: z.lazy(() => BookingRequestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingRequestUpdateToOneWithWhereWithoutBookingInputSchema),z.lazy(() => BookingRequestUpdateWithoutBookingInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingInputSchema) ]).optional(),
}).strict();

export default BookingRequestUpdateOneWithoutBookingNestedInputSchema;
