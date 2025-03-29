import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutCustomerInputSchema } from './BookingRequestCreateWithoutCustomerInputSchema';
import { BookingRequestUncheckedCreateWithoutCustomerInputSchema } from './BookingRequestUncheckedCreateWithoutCustomerInputSchema';
import { BookingRequestCreateOrConnectWithoutCustomerInputSchema } from './BookingRequestCreateOrConnectWithoutCustomerInputSchema';
import { BookingRequestUpsertWithWhereUniqueWithoutCustomerInputSchema } from './BookingRequestUpsertWithWhereUniqueWithoutCustomerInputSchema';
import { BookingRequestCreateManyCustomerInputEnvelopeSchema } from './BookingRequestCreateManyCustomerInputEnvelopeSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithWhereUniqueWithoutCustomerInputSchema } from './BookingRequestUpdateWithWhereUniqueWithoutCustomerInputSchema';
import { BookingRequestUpdateManyWithWhereWithoutCustomerInputSchema } from './BookingRequestUpdateManyWithWhereWithoutCustomerInputSchema';
import { BookingRequestScalarWhereInputSchema } from './BookingRequestScalarWhereInputSchema';

export const BookingRequestUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.BookingRequestUncheckedUpdateManyWithoutCustomerNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutCustomerInputSchema),z.lazy(() => BookingRequestCreateWithoutCustomerInputSchema).array(),z.lazy(() => BookingRequestUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => BookingRequestCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestUpsertWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => BookingRequestUpsertWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestCreateManyCustomerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestUpdateWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => BookingRequestUpdateWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestUpdateManyWithWhereWithoutCustomerInputSchema),z.lazy(() => BookingRequestUpdateManyWithWhereWithoutCustomerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestScalarWhereInputSchema),z.lazy(() => BookingRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestUncheckedUpdateManyWithoutCustomerNestedInputSchema;
