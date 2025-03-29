import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutMerchantInputSchema } from './BookingRequestCreateWithoutMerchantInputSchema';
import { BookingRequestUncheckedCreateWithoutMerchantInputSchema } from './BookingRequestUncheckedCreateWithoutMerchantInputSchema';
import { BookingRequestCreateOrConnectWithoutMerchantInputSchema } from './BookingRequestCreateOrConnectWithoutMerchantInputSchema';
import { BookingRequestUpsertWithWhereUniqueWithoutMerchantInputSchema } from './BookingRequestUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { BookingRequestCreateManyMerchantInputEnvelopeSchema } from './BookingRequestCreateManyMerchantInputEnvelopeSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';
import { BookingRequestUpdateWithWhereUniqueWithoutMerchantInputSchema } from './BookingRequestUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { BookingRequestUpdateManyWithWhereWithoutMerchantInputSchema } from './BookingRequestUpdateManyWithWhereWithoutMerchantInputSchema';
import { BookingRequestScalarWhereInputSchema } from './BookingRequestScalarWhereInputSchema';

export const BookingRequestUncheckedUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.BookingRequestUncheckedUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingRequestUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingRequestCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingRequestUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingRequestUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => BookingRequestUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestScalarWhereInputSchema),z.lazy(() => BookingRequestScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestUncheckedUpdateManyWithoutMerchantNestedInputSchema;
