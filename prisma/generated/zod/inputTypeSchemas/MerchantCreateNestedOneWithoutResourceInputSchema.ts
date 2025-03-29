import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutResourceInputSchema } from './MerchantCreateWithoutResourceInputSchema';
import { MerchantUncheckedCreateWithoutResourceInputSchema } from './MerchantUncheckedCreateWithoutResourceInputSchema';
import { MerchantCreateOrConnectWithoutResourceInputSchema } from './MerchantCreateOrConnectWithoutResourceInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutResourceInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutResourceInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutResourceInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutResourceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutResourceInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutResourceInputSchema;
