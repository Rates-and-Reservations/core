import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutResourceInputSchema } from './BookingRequestCreateWithoutResourceInputSchema';
import { BookingRequestUncheckedCreateWithoutResourceInputSchema } from './BookingRequestUncheckedCreateWithoutResourceInputSchema';
import { BookingRequestCreateOrConnectWithoutResourceInputSchema } from './BookingRequestCreateOrConnectWithoutResourceInputSchema';
import { BookingRequestUpsertWithWhereUniqueWithoutResourceInputSchema } from './BookingRequestUpsertWithWhereUniqueWithoutResourceInputSchema';
import { BookingRequestCreateManyResourceInputEnvelopeSchema } from './BookingRequestCreateManyResourceInputEnvelopeSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithWhereUniqueWithoutResourceInputSchema } from './BookingRequestUpdateWithWhereUniqueWithoutResourceInputSchema';
import { BookingRequestUpdateManyWithWhereWithoutResourceInputSchema } from './BookingRequestUpdateManyWithWhereWithoutResourceInputSchema';
import { BookingRequestScalarWhereInputSchema } from './BookingRequestScalarWhereInputSchema';

export const BookingRequestUpdateManyWithoutResourceNestedInputSchema: z.ZodType<Prisma.BookingRequestUpdateManyWithoutResourceNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutResourceInputSchema),z.lazy(() => BookingRequestCreateWithoutResourceInputSchema).array(),z.lazy(() => BookingRequestUncheckedCreateWithoutResourceInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutResourceInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestCreateOrConnectWithoutResourceInputSchema),z.lazy(() => BookingRequestCreateOrConnectWithoutResourceInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestUpsertWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => BookingRequestUpsertWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestCreateManyResourceInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestUpdateWithWhereUniqueWithoutResourceInputSchema),z.lazy(() => BookingRequestUpdateWithWhereUniqueWithoutResourceInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestUpdateManyWithWhereWithoutResourceInputSchema),z.lazy(() => BookingRequestUpdateManyWithWhereWithoutResourceInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestScalarWhereInputSchema),z.lazy(() => BookingRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestUpdateManyWithoutResourceNestedInputSchema;
