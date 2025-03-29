import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogCreateWithoutMerchantInputSchema } from './BookingActivityLogCreateWithoutMerchantInputSchema';
import { BookingActivityLogUncheckedCreateWithoutMerchantInputSchema } from './BookingActivityLogUncheckedCreateWithoutMerchantInputSchema';
import { BookingActivityLogCreateOrConnectWithoutMerchantInputSchema } from './BookingActivityLogCreateOrConnectWithoutMerchantInputSchema';
import { BookingActivityLogUpsertWithWhereUniqueWithoutMerchantInputSchema } from './BookingActivityLogUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { BookingActivityLogCreateManyMerchantInputEnvelopeSchema } from './BookingActivityLogCreateManyMerchantInputEnvelopeSchema';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';
import { BookingActivityLogUpdateWithWhereUniqueWithoutMerchantInputSchema } from './BookingActivityLogUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { BookingActivityLogUpdateManyWithWhereWithoutMerchantInputSchema } from './BookingActivityLogUpdateManyWithWhereWithoutMerchantInputSchema';
import { BookingActivityLogScalarWhereInputSchema } from './BookingActivityLogScalarWhereInputSchema';

export const BookingActivityLogUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.BookingActivityLogUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingActivityLogCreateWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingActivityLogUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingActivityLogCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingActivityLogUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingActivityLogCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingActivityLogUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingActivityLogUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingActivityLogScalarWhereInputSchema),z.lazy(() => BookingActivityLogScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingActivityLogUncheckedUpdateManyWithoutMerchantNestedInputSchema;
