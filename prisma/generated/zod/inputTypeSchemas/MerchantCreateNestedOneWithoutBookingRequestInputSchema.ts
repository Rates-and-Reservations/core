import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingRequestInputSchema } from './MerchantCreateWithoutBookingRequestInputSchema';
import { MerchantUncheckedCreateWithoutBookingRequestInputSchema } from './MerchantUncheckedCreateWithoutBookingRequestInputSchema';
import { MerchantCreateOrConnectWithoutBookingRequestInputSchema } from './MerchantCreateOrConnectWithoutBookingRequestInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutBookingRequestInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutBookingRequestInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingRequestInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingRequestInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutBookingRequestInputSchema;
