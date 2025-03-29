import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutCustomerInputSchema } from './BookingCreateWithoutCustomerInputSchema';
import { BookingUncheckedCreateWithoutCustomerInputSchema } from './BookingUncheckedCreateWithoutCustomerInputSchema';
import { BookingCreateOrConnectWithoutCustomerInputSchema } from './BookingCreateOrConnectWithoutCustomerInputSchema';
import { BookingCreateManyCustomerInputEnvelopeSchema } from './BookingCreateManyCustomerInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedManyWithoutCustomerInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutCustomerInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutCustomerInputSchema),z.lazy(() => BookingCreateWithoutCustomerInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => BookingCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyCustomerInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingCreateNestedManyWithoutCustomerInputSchema;
