import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutBookingActivityLogInputSchema } from './MerchantCreateWithoutBookingActivityLogInputSchema';
import { MerchantUncheckedCreateWithoutBookingActivityLogInputSchema } from './MerchantUncheckedCreateWithoutBookingActivityLogInputSchema';

export const MerchantCreateOrConnectWithoutBookingActivityLogInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutBookingActivityLogInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingActivityLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingActivityLogInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutBookingActivityLogInputSchema;
