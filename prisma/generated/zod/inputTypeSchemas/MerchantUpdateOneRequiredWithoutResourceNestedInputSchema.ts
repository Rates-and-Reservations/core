import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutResourceInputSchema } from './MerchantCreateWithoutResourceInputSchema';
import { MerchantUncheckedCreateWithoutResourceInputSchema } from './MerchantUncheckedCreateWithoutResourceInputSchema';
import { MerchantCreateOrConnectWithoutResourceInputSchema } from './MerchantCreateOrConnectWithoutResourceInputSchema';
import { MerchantUpsertWithoutResourceInputSchema } from './MerchantUpsertWithoutResourceInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutResourceInputSchema } from './MerchantUpdateToOneWithWhereWithoutResourceInputSchema';
import { MerchantUpdateWithoutResourceInputSchema } from './MerchantUpdateWithoutResourceInputSchema';
import { MerchantUncheckedUpdateWithoutResourceInputSchema } from './MerchantUncheckedUpdateWithoutResourceInputSchema';

export const MerchantUpdateOneRequiredWithoutResourceNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutResourceNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutResourceInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutResourceInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutResourceInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutResourceInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutResourceInputSchema),z.lazy(() => MerchantUpdateWithoutResourceInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutResourceInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutResourceNestedInputSchema;
