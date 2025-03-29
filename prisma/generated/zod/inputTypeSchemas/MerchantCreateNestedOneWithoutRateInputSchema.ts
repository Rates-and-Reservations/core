import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutRateInputSchema } from './MerchantCreateWithoutRateInputSchema';
import { MerchantUncheckedCreateWithoutRateInputSchema } from './MerchantUncheckedCreateWithoutRateInputSchema';
import { MerchantCreateOrConnectWithoutRateInputSchema } from './MerchantCreateOrConnectWithoutRateInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutRateInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutRateInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutRateInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutRateInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutRateInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutRateInputSchema;
