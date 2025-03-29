import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingCreateWithoutMerchantInputSchema } from './BookingCreateWithoutMerchantInputSchema';
import { BookingUncheckedCreateWithoutMerchantInputSchema } from './BookingUncheckedCreateWithoutMerchantInputSchema';
import { BookingCreateOrConnectWithoutMerchantInputSchema } from './BookingCreateOrConnectWithoutMerchantInputSchema';
import { BookingCreateManyMerchantInputEnvelopeSchema } from './BookingCreateManyMerchantInputEnvelopeSchema';
import { BookingWhereUniqueInputSchema } from './BookingWhereUniqueInputSchema';

export const BookingCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.BookingCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => BookingCreateWithoutMerchantInputSchema),z.lazy(() => BookingCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingWhereUniqueInputSchema),z.lazy(() => BookingWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingCreateNestedManyWithoutMerchantInputSchema;
