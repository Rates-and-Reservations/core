import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutTemplateInputSchema } from './BookingRequestCreateWithoutTemplateInputSchema';
import { BookingRequestUncheckedCreateWithoutTemplateInputSchema } from './BookingRequestUncheckedCreateWithoutTemplateInputSchema';
import { BookingRequestCreateOrConnectWithoutTemplateInputSchema } from './BookingRequestCreateOrConnectWithoutTemplateInputSchema';
import { BookingRequestUpsertWithWhereUniqueWithoutTemplateInputSchema } from './BookingRequestUpsertWithWhereUniqueWithoutTemplateInputSchema';
import { BookingRequestCreateManyTemplateInputEnvelopeSchema } from './BookingRequestCreateManyTemplateInputEnvelopeSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithWhereUniqueWithoutTemplateInputSchema } from './BookingRequestUpdateWithWhereUniqueWithoutTemplateInputSchema';
import { BookingRequestUpdateManyWithWhereWithoutTemplateInputSchema } from './BookingRequestUpdateManyWithWhereWithoutTemplateInputSchema';
import { BookingRequestScalarWhereInputSchema } from './BookingRequestScalarWhereInputSchema';

export const BookingRequestUncheckedUpdateManyWithoutTemplateNestedInputSchema: z.ZodType<Prisma.BookingRequestUncheckedUpdateManyWithoutTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutTemplateInputSchema),z.lazy(() => BookingRequestCreateWithoutTemplateInputSchema).array(),z.lazy(() => BookingRequestUncheckedCreateWithoutTemplateInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestCreateOrConnectWithoutTemplateInputSchema),z.lazy(() => BookingRequestCreateOrConnectWithoutTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestUpsertWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => BookingRequestUpsertWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestCreateManyTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestUpdateWithWhereUniqueWithoutTemplateInputSchema),z.lazy(() => BookingRequestUpdateWithWhereUniqueWithoutTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestUpdateManyWithWhereWithoutTemplateInputSchema),z.lazy(() => BookingRequestUpdateManyWithWhereWithoutTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestScalarWhereInputSchema),z.lazy(() => BookingRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestUncheckedUpdateManyWithoutTemplateNestedInputSchema;
