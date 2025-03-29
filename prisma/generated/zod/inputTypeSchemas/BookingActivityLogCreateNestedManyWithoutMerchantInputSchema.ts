import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingActivityLogCreateWithoutMerchantInputSchema } from './BookingActivityLogCreateWithoutMerchantInputSchema';
import { BookingActivityLogUncheckedCreateWithoutMerchantInputSchema } from './BookingActivityLogUncheckedCreateWithoutMerchantInputSchema';
import { BookingActivityLogCreateOrConnectWithoutMerchantInputSchema } from './BookingActivityLogCreateOrConnectWithoutMerchantInputSchema';
import { BookingActivityLogCreateManyMerchantInputEnvelopeSchema } from './BookingActivityLogCreateManyMerchantInputEnvelopeSchema';
import { BookingActivityLogWhereUniqueInputSchema } from './BookingActivityLogWhereUniqueInputSchema';

export const BookingActivityLogCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.BookingActivityLogCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => BookingActivityLogCreateWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingActivityLogUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingActivityLogCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingActivityLogCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingActivityLogCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingActivityLogWhereUniqueInputSchema),z.lazy(() => BookingActivityLogWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingActivityLogCreateNestedManyWithoutMerchantInputSchema;
