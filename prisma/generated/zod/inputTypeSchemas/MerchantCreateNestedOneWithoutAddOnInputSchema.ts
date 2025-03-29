import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutAddOnInputSchema } from './MerchantCreateWithoutAddOnInputSchema';
import { MerchantUncheckedCreateWithoutAddOnInputSchema } from './MerchantUncheckedCreateWithoutAddOnInputSchema';
import { MerchantCreateOrConnectWithoutAddOnInputSchema } from './MerchantCreateOrConnectWithoutAddOnInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutAddOnInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutAddOnInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutAddOnInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutAddOnInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutAddOnInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutAddOnInputSchema;
