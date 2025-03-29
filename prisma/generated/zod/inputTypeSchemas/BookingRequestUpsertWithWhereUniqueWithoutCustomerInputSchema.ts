import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithoutCustomerInputSchema } from './BookingRequestUpdateWithoutCustomerInputSchema';
import { BookingRequestUncheckedUpdateWithoutCustomerInputSchema } from './BookingRequestUncheckedUpdateWithoutCustomerInputSchema';
import { BookingRequestCreateWithoutCustomerInputSchema } from './BookingRequestCreateWithoutCustomerInputSchema';
import { BookingRequestUncheckedCreateWithoutCustomerInputSchema } from './BookingRequestUncheckedCreateWithoutCustomerInputSchema';

export const BookingRequestUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.BookingRequestUpsertWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => BookingRequestWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingRequestUpdateWithoutCustomerInputSchema),z.lazy(() => BookingRequestUncheckedUpdateWithoutCustomerInputSchema) ]),
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutCustomerInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default BookingRequestUpsertWithWhereUniqueWithoutCustomerInputSchema;
