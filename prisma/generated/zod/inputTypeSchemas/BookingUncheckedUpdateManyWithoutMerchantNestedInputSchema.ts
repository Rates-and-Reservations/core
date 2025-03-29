import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutMerchantInputSchema } from './BookingCreateWithoutMerchantInputSchema';
import { BookingUncheckedCreateWithoutMerchantInputSchema } from './BookingUncheckedCreateWithoutMerchantInputSchema';
import { BookingCreateOrConnectWithoutMerchantInputSchema } from './BookingCreateOrConnectWithoutMerchantInputSchema';
import { BookingUpsertWithWhereUniqueWithoutMerchantInputSchema } from './BookingUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { BookingCreateManyMerchantInputEnvelopeSchema } from './BookingCreateManyMerchantInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';
import { BookingUpdateWithWhereUniqueWithoutMerchantInputSchema } from './BookingUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { BookingUpdateManyWithWhereWithoutMerchantInputSchema } from './BookingUpdateManyWithWhereWithoutMerchantInputSchema';
import { BookingScalarWhereInputSchema } from './BookingScalarWhereInputSchema';

export const BookingUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.BookingUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutMerchantInputSchema),z.lazy(() => BookingCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => BookingUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingScalarWhereInputSchema),z.lazy(() => BookingScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingUncheckedUpdateManyWithoutMerchantNestedInputSchema;
