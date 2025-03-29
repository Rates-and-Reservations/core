import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutBookingRequestInputSchema } from './MerchantCreateWithoutBookingRequestInputSchema';
import { MerchantUncheckedCreateWithoutBookingRequestInputSchema } from './MerchantUncheckedCreateWithoutBookingRequestInputSchema';

export const MerchantCreateOrConnectWithoutBookingRequestInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutBookingRequestInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingRequestInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingRequestInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutBookingRequestInputSchema;
