import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActionCreateWithoutBookingTemplateInputSchema } from './BookingActionCreateWithoutBookingTemplateInputSchema';
import { BookingActionUncheckedCreateWithoutBookingTemplateInputSchema } from './BookingActionUncheckedCreateWithoutBookingTemplateInputSchema';
import { BookingActionCreateOrConnectWithoutBookingTemplateInputSchema } from './BookingActionCreateOrConnectWithoutBookingTemplateInputSchema';
import { BookingActionUpsertWithWhereUniqueWithoutBookingTemplateInputSchema } from './BookingActionUpsertWithWhereUniqueWithoutBookingTemplateInputSchema';
import { BookingActionCreateManyBookingTemplateInputEnvelopeSchema } from './BookingActionCreateManyBookingTemplateInputEnvelopeSchema';
import { BookingActionWhereUniqueInputSchema } from './BookingActionWhereUniqueInputSchema';
import { BookingActionUpdateWithWhereUniqueWithoutBookingTemplateInputSchema } from './BookingActionUpdateWithWhereUniqueWithoutBookingTemplateInputSchema';
import { BookingActionUpdateManyWithWhereWithoutBookingTemplateInputSchema } from './BookingActionUpdateManyWithWhereWithoutBookingTemplateInputSchema';
import { BookingActionScalarWhereInputSchema } from './BookingActionScalarWhereInputSchema';

export const BookingActionUpdateManyWithoutBookingTemplateNestedInputSchema: z.ZodType<Prisma.BookingActionUpdateManyWithoutBookingTemplateNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingActionCreateWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionCreateWithoutBookingTemplateInputSchema).array(),z.lazy(() => BookingActionUncheckedCreateWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUncheckedCreateWithoutBookingTemplateInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingActionCreateOrConnectWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionCreateOrConnectWithoutBookingTemplateInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingActionUpsertWithWhereUniqueWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUpsertWithWhereUniqueWithoutBookingTemplateInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingActionCreateManyBookingTemplateInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingActionWhereUniqueInputSchema),z.lazy(() => BookingActionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingActionWhereUniqueInputSchema),z.lazy(() => BookingActionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingActionWhereUniqueInputSchema),z.lazy(() => BookingActionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingActionWhereUniqueInputSchema),z.lazy(() => BookingActionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingActionUpdateWithWhereUniqueWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUpdateWithWhereUniqueWithoutBookingTemplateInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingActionUpdateManyWithWhereWithoutBookingTemplateInputSchema),z.lazy(() => BookingActionUpdateManyWithWhereWithoutBookingTemplateInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingActionScalarWhereInputSchema),z.lazy(() => BookingActionScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingActionUpdateManyWithoutBookingTemplateNestedInputSchema;
