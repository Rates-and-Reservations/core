import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutNotificationInputSchema } from './MerchantCreateWithoutNotificationInputSchema';
import { MerchantUncheckedCreateWithoutNotificationInputSchema } from './MerchantUncheckedCreateWithoutNotificationInputSchema';
import { MerchantCreateOrConnectWithoutNotificationInputSchema } from './MerchantCreateOrConnectWithoutNotificationInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';

export const MerchantCreateNestedOneWithoutNotificationInputSchema: z.ZodType<Prisma.MerchantCreateNestedOneWithoutNotificationInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutNotificationInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutNotificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutNotificationInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional()
}).strict();

export default MerchantCreateNestedOneWithoutNotificationInputSchema;
