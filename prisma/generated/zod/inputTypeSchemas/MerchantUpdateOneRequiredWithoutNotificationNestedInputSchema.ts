import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutNotificationInputSchema } from './MerchantCreateWithoutNotificationInputSchema';
import { MerchantUncheckedCreateWithoutNotificationInputSchema } from './MerchantUncheckedCreateWithoutNotificationInputSchema';
import { MerchantCreateOrConnectWithoutNotificationInputSchema } from './MerchantCreateOrConnectWithoutNotificationInputSchema';
import { MerchantUpsertWithoutNotificationInputSchema } from './MerchantUpsertWithoutNotificationInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutNotificationInputSchema } from './MerchantUpdateToOneWithWhereWithoutNotificationInputSchema';
import { MerchantUpdateWithoutNotificationInputSchema } from './MerchantUpdateWithoutNotificationInputSchema';
import { MerchantUncheckedUpdateWithoutNotificationInputSchema } from './MerchantUncheckedUpdateWithoutNotificationInputSchema';

export const MerchantUpdateOneRequiredWithoutNotificationNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutNotificationNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutNotificationInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutNotificationInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutNotificationInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutNotificationInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutNotificationInputSchema),z.lazy(() => MerchantUpdateWithoutNotificationInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutNotificationInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutNotificationNestedInputSchema;
