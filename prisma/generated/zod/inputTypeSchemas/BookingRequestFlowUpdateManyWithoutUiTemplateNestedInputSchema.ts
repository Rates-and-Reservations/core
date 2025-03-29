import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateWithoutUiTemplateInputSchema } from './BookingRequestFlowCreateWithoutUiTemplateInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema } from './BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema';
import { BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema } from './BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema';
import { BookingRequestFlowUpsertWithWhereUniqueWithoutUiTemplateInputSchema } from './BookingRequestFlowUpsertWithWhereUniqueWithoutUiTemplateInputSchema';
import { BookingRequestFlowCreateManyUiTemplateInputEnvelopeSchema } from './BookingRequestFlowCreateManyUiTemplateInputEnvelopeSchema';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithWhereUniqueWithoutUiTemplateInputSchema } from './BookingRequestFlowUpdateWithWhereUniqueWithoutUiTemplateInputSchema';
import { BookingRequestFlowUpdateManyWithWhereWithoutUiTemplateInputSchema } from './BookingRequestFlowUpdateManyWithWhereWithoutUiTemplateInputSchema';
import { BookingRequestFlowScalarWhereInputSchema } from './BookingRequestFlowScalarWhereInputSchema';

export const BookingRequestFlowUpdateManyWithoutUiTemplateNestedInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateManyWithoutUiTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowCreateWithoutUiTemplateInputSchema).array(),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutUiTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowCreateOrConnectWithoutUiTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestFlowUpsertWithWhereUniqueWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUpsertWithWhereUniqueWithoutUiTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestFlowCreateManyUiTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestFlowUpdateWithWhereUniqueWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUpdateWithWhereUniqueWithoutUiTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestFlowUpdateManyWithWhereWithoutUiTemplateInputSchema),z.lazy(() => BookingRequestFlowUpdateManyWithWhereWithoutUiTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestFlowScalarWhereInputSchema),z.lazy(() => BookingRequestFlowScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestFlowUpdateManyWithoutUiTemplateNestedInputSchema;
