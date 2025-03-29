import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithoutCustomerInputSchema } from './BookingUpdateWithoutCustomerInputSchema';
import { BookingUncheckedUpdateWithoutCustomerInputSchema } from './BookingUncheckedUpdateWithoutCustomerInputSchema';
import { BookingCreateWithoutCustomerInputSchema } from './BookingCreateWithoutCustomerInputSchema';
import { BookingUncheckedCreateWithoutCustomerInputSchema } from './BookingUncheckedCreateWithoutCustomerInputSchema';

export const BookingUpsertWithWhereUniqueWithoutCustomerInputSchema: z.ZodType<Prisma.BookingUpsertWithWhereUniqueWithoutCustomerInput> = z.object({
  where: z.lazy(() => BookingWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BookingUpdateWithoutCustomerInputSchema),z.lazy(() => BookingUncheckedUpdateWithoutCustomerInputSchema) ]),
  create: z.union([ z.lazy(() => BookingCreateWithoutCustomerInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCustomerInputSchema) ]),
}).strict();

export default BookingUpsertWithWhereUniqueWithoutCustomerInputSchema;
