import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantCreateWithoutBookingInputSchema } from './MerchantCreateWithoutBookingInputSchema';
import { MerchantUncheckedCreateWithoutBookingInputSchema } from './MerchantUncheckedCreateWithoutBookingInputSchema';

export const MerchantCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.MerchantCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => MerchantWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default MerchantCreateOrConnectWithoutBookingInputSchema;
