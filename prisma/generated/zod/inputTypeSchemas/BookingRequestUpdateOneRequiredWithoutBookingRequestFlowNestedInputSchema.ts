import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutBookingRequestFlowInputSchema } from './BookingRequestCreateWithoutBookingRequestFlowInputSchema';
import { BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema } from './BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { BookingRequestCreateOrConnectWithoutBookingRequestFlowInputSchema } from './BookingRequestCreateOrConnectWithoutBookingRequestFlowInputSchema';
import { BookingRequestUpsertWithoutBookingRequestFlowInputSchema } from './BookingRequestUpsertWithoutBookingRequestFlowInputSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema } from './BookingRequestUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema';
import { BookingRequestUpdateWithoutBookingRequestFlowInputSchema } from './BookingRequestUpdateWithoutBookingRequestFlowInputSchema';
import { BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema } from './BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema';

export const BookingRequestUpdateOneRequiredWithoutBookingRequestFlowNestedInputSchema: z.ZodType<Prisma.BookingRequestUpdateOneRequiredWithoutBookingRequestFlowNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutBookingRequestFlowInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingRequestCreateOrConnectWithoutBookingRequestFlowInputSchema).optional(),
  upsert: z.lazy(() => BookingRequestUpsertWithoutBookingRequestFlowInputSchema).optional(),
  connect: z.lazy(() => BookingRequestWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingRequestUpdateToOneWithWhereWithoutBookingRequestFlowInputSchema),z.lazy(() => BookingRequestUpdateWithoutBookingRequestFlowInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutBookingRequestFlowInputSchema) ]).optional(),
}).strict();

export default BookingRequestUpdateOneRequiredWithoutBookingRequestFlowNestedInputSchema;
