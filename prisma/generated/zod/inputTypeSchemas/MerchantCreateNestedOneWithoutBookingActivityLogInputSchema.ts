import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingActivityLogInputSchema } from './MerchantCreateWithoutBookingActivityLogInputSchema';
import { MerchantUncheckedCreateWithoutBookingActivityLogInputSchema } from './MerchantUncheckedCreateWithoutBookingActivityLogInputSchema';
import { MerchantCreateOrConnectWithoutBookingActivityLogInputSchema } from './MerchantCreateOrConnectWithoutBookingActivityLogInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutBookingActivityLogInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutBookingActivityLogInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingActivityLogInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingActivityLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingActivityLogInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutBookingActivityLogInputSchema;
