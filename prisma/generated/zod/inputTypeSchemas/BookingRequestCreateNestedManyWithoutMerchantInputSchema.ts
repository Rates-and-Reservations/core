import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestCreateWithoutMerchantInputSchema } from './BookingRequestCreateWithoutMerchantInputSchema';
import { BookingRequestUncheckedCreateWithoutMerchantInputSchema } from './BookingRequestUncheckedCreateWithoutMerchantInputSchema';
import { BookingRequestCreateOrConnectWithoutMerchantInputSchema } from './BookingRequestCreateOrConnectWithoutMerchantInputSchema';
import { BookingRequestCreateManyMerchantInputEnvelopeSchema } from './BookingRequestCreateManyMerchantInputEnvelopeSchema';
import { BookingRequestWhereUniqueInputSchema } from './BookingRequestWhereUniqueInputSchema';

export const BookingRequestCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingRequestUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingRequestCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestWhereUniqueInputSchema),z.lazy(() => BookingRequestWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestCreateNestedManyWithoutMerchantInputSchema;
