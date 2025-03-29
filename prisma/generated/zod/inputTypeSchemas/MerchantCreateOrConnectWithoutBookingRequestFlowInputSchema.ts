import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutBookingRequestFlowInputSchema } from './MerchantCreateWithoutBookingRequestFlowInputSchema';
import { MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema } from './MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema';

export const MerchantCreateOrConnectWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutBookingRequestFlowInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutBookingRequestFlowInputSchema;
