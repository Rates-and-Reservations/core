import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateWithoutMerchantInputSchema } from './BookingRequestFlowCreateWithoutMerchantInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema } from './BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema';
import { BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema } from './BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema';
import { BookingRequestFlowUpsertWithWhereUniqueWithoutMerchantInputSchema } from './BookingRequestFlowUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { BookingRequestFlowCreateManyMerchantInputEnvelopeSchema } from './BookingRequestFlowCreateManyMerchantInputEnvelopeSchema';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';
import { BookingRequestFlowUpdateWithWhereUniqueWithoutMerchantInputSchema } from './BookingRequestFlowUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { BookingRequestFlowUpdateManyWithWhereWithoutMerchantInputSchema } from './BookingRequestFlowUpdateManyWithWhereWithoutMerchantInputSchema';
import { BookingRequestFlowScalarWhereInputSchema } from './BookingRequestFlowScalarWhereInputSchema';

export const BookingRequestFlowUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.BookingRequestFlowUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BookingRequestFlowUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestFlowCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BookingRequestFlowUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BookingRequestFlowUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BookingRequestFlowScalarWhereInputSchema),z.lazy(() => BookingRequestFlowScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestFlowUpdateManyWithoutMerchantNestedInputSchema;
