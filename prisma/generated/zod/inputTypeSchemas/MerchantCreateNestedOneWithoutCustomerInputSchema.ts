import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutCustomerInputSchema } from './MerchantCreateWithoutCustomerInputSchema';
import { MerchantUncheckedCreateWithoutCustomerInputSchema } from './MerchantUncheckedCreateWithoutCustomerInputSchema';
import { MerchantCreateOrConnectWithoutCustomerInputSchema } from './MerchantCreateOrConnectWithoutCustomerInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutCustomerInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutCustomerInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutCustomerInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutCustomerInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutCustomerInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutCustomerInputSchema;
