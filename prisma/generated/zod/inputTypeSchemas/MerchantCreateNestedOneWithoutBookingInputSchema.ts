import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingInputSchema } from './MerchantCreateWithoutBookingInputSchema';
import { MerchantUncheckedCreateWithoutBookingInputSchema } from './MerchantUncheckedCreateWithoutBookingInputSchema';
import { MerchantCreateOrConnectWithoutBookingInputSchema } from './MerchantCreateOrConnectWithoutBookingInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutBookingInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutBookingInputSchema;
