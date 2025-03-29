import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { MerchantCreateWithoutPaymentActionsInputSchema } from './MerchantCreateWithoutPaymentActionsInputSchema';
import { MerchantUncheckedCreateWithoutPaymentActionsInputSchema } from './MerchantUncheckedCreateWithoutPaymentActionsInputSchema';
import { MerchantCreateOrConnectWithoutPaymentActionsInputSchema } from './MerchantCreateOrConnectWithoutPaymentActionsInputSchema';
import { MerchantUpsertWithoutPaymentActionsInputSchema } from './MerchantUpsertWithoutPaymentActionsInputSchema';
import { MerchantWhereUniqueInputSchema } from './MerchantWhereUniqueInputSchema';
import { MerchantUpdateToOneWithWhereWithoutPaymentActionsInputSchema } from './MerchantUpdateToOneWithWhereWithoutPaymentActionsInputSchema';
import { MerchantUpdateWithoutPaymentActionsInputSchema } from './MerchantUpdateWithoutPaymentActionsInputSchema';
import { MerchantUncheckedUpdateWithoutPaymentActionsInputSchema } from './MerchantUncheckedUpdateWithoutPaymentActionsInputSchema';

export const MerchantUpdateOneRequiredWithoutPaymentActionsNestedInputSchema: z.ZodType<Prisma.MerchantUpdateOneRequiredWithoutPaymentActionsNestedInput> = z.object({
  create: z.union([ z.lazy(() => MerchantCreateWithoutPaymentActionsInputSchema),z.lazy(() => MerchantUncheckedCreateWithoutPaymentActionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => MerchantCreateOrConnectWithoutPaymentActionsInputSchema).optional(),
  upsert: z.lazy(() => MerchantUpsertWithoutPaymentActionsInputSchema).optional(),
  connect: z.lazy(() => MerchantWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => MerchantUpdateToOneWithWhereWithoutPaymentActionsInputSchema),z.lazy(() => MerchantUpdateWithoutPaymentActionsInputSchema),z.lazy(() => MerchantUncheckedUpdateWithoutPaymentActionsInputSchema) ]).optional(),
}).strict();

export default MerchantUpdateOneRequiredWithoutPaymentActionsNestedInputSchema;
