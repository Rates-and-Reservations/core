import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutCustomerInputSchema } from './BookingCreateWithoutCustomerInputSchema';
import { BookingUncheckedCreateWithoutCustomerInputSchema } from './BookingUncheckedCreateWithoutCustomerInputSchema';
import { BookingCreateOrConnectWithoutCustomerInputSchema } from './BookingCreateOrConnectWithoutCustomerInputSchema';
import { BookingUpsertWithWhereUniqueWithoutCustomerInputSchema } from './BookingUpsertWithWhereUniqueWithoutCustomerInputSchema';
import { BookingCreateManyCustomerInputEnvelopeSchema } from './BookingCreateManyCustomerInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithWhereUniqueWithoutCustomerInputSchema } from './BookingUpdateWithWhereUniqueWithoutCustomerInputSchema';
import { BookingUpdateManyWithWhereWithoutCustomerInputSchema } from './BookingUpdateManyWithWhereWithoutCustomerInputSchema';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';

export const BookingUncheckedUpdateManyWithoutCustomerNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutCustomerNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutCustomerInputSchema),z.lazy(() => BookingCreateWithoutCustomerInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutCustomerInputSchema),z.lazy(() => BookingUncheckedCreateWithoutCustomerInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutCustomerInputSchema),z.lazy(() => BookingCreateOrConnectWithoutCustomerInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyCustomerInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutCustomerInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutCustomerInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutCustomerInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutCustomerInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedUpdateManyWithoutCustomerNestedInputSchema;
