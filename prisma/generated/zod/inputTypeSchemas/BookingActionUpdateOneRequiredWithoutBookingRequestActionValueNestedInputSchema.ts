import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionCreateWithoutBookingRequestActionValueInputSchema } from './BookingActionCreateWithoutBookingRequestActionValueInputSchema';
import { BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema } from './BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema';
import { BookingActionCreateOrConnectWithoutBookingRequestActionValueInputSchema } from './BookingActionCreateOrConnectWithoutBookingRequestActionValueInputSchema';
import { BookingActionUpsertWithoutBookingRequestActionValueInputSchema } from './BookingActionUpsertWithoutBookingRequestActionValueInputSchema';
import { BookingActionWhereUniqueInputSchema } from './BookingActionWhereUniqueInputSchema';
import { BookingActionUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema } from './BookingActionUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema';
import { BookingActionUpdateWithoutBookingRequestActionValueInputSchema } from './BookingActionUpdateWithoutBookingRequestActionValueInputSchema';
import { BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema } from './BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema';

export const BookingActionUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema: z.ZodType<Prisma.BookingActionUpdateOneRequiredWithoutBookingRequestActionValueNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingActionCreateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingActionUncheckedCreateWithoutBookingRequestActionValueInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BookingActionCreateOrConnectWithoutBookingRequestActionValueInputSchema).optional(),
  upsert: z.lazy(() => BookingActionUpsertWithoutBookingRequestActionValueInputSchema).optional(),
  connect: z.lazy(() => BookingActionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BookingActionUpdateToOneWithWhereWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingActionUpdateWithoutBookingRequestActionValueInputSchema),z.lazy(() => BookingActionUncheckedUpdateWithoutBookingRequestActionValueInputSchema) ]).optional(),
}).strict();

export default BookingActionUpdateOneRequiredWithoutBookingRequestActionValueNestedInputSchema;
