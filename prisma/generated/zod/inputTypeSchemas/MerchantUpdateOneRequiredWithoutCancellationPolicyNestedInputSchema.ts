import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutCancellationPolicyInputSchema } from './MerchantCreateWithoutCancellationPolicyInputSchema';
import { MerchantUncheckedCreateWithoutCancellationPolicyInputSchema } from './MerchantUncheckedCreateWithoutCancellationPolicyInputSchema';
import { MerchantCreateOrConnectWithoutCancellationPolicyInputSchema } from './MerchantCreateOrConnectWithoutCancellationPolicyInputSchema';
import { MerchantUpsertWithoutCancellationPolicyInputSchema } from './MerchantUpsertWithoutCancellationPolicyInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutCancellationPolicyInputSchema } from './MerchantUpdateToOneWithWhereWithoutCancellationPolicyInputSchema';
import { MerchantUpdateWithoutCancellationPolicyInputSchema } from './MerchantUpdateWithoutCancellationPolicyInputSchema';
import { MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema } from './MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema';

export const MerchantUpdateOneRequiredWithoutCancellationPolicyNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutCancellationPolicyNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutCancellationPolicyInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutCancellationPolicyInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutCancellationPolicyInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutCancellationPolicyInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutCancellationPolicyInputSchema),z.lazy(() => MerchantUpdateWithoutCancellationPolicyInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutCancellationPolicyInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutCancellationPolicyNestedInputSchema;
