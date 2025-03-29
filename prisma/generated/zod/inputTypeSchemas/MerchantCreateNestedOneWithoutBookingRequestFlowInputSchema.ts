import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutBookingRequestFlowInputSchema } from './MerchantCreateWithoutBookingRequestFlowInputSchema';
import { MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema } from './MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema';
import { MerchantCreateOrConnectWithoutBookingRequestFlowInputSchema } from './MerchantCreateOrConnectWithoutBookingRequestFlowInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutBookingRequestFlowInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutBookingRequestFlowInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutBookingRequestFlowInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutBookingRequestFlowInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutBookingRequestFlowInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutBookingRequestFlowInputSchema;
