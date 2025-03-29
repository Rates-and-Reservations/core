import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BookingRequestFlowCreateWithoutMerchantInputSchema } from './BookingRequestFlowCreateWithoutMerchantInputSchema';
import { BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema } from './BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema';
import { BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema } from './BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema';
import { BookingRequestFlowCreateManyMerchantInputEnvelopeSchema } from './BookingRequestFlowCreateManyMerchantInputEnvelopeSchema';
import { BookingRequestFlowWhereUniqueInputSchema } from './BookingRequestFlowWhereUniqueInputSchema';

export const BookingRequestFlowUncheckedCreateNestedManyWithoutMerchantInputSchema: z.ZodType<Prisma.BookingRequestFlowUncheckedCreateNestedManyWithoutMerchantInput> = z.object({
  create: z.union([ z.lazy(() => BookingRequestFlowCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowCreateWithoutMerchantInputSchema).array(),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => BookingRequestFlowCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BookingRequestFlowCreateManyMerchantInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BookingRequestFlowWhereUniqueInputSchema),z.lazy(() => BookingRequestFlowWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default BookingRequestFlowUncheckedCreateNestedManyWithoutMerchantInputSchema;
