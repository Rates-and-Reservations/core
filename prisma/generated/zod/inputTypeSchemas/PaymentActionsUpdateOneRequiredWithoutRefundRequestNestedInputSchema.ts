import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutRefundRequestInputSchema } from './PaymentActionsCreateWithoutRefundRequestInputSchema';
import { PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema } from './PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema';
import { PaymentActionsCreateOrConnectWithoutRefundRequestInputSchema } from './PaymentActionsCreateOrConnectWithoutRefundRequestInputSchema';
import { PaymentActionsUpsertWithoutRefundRequestInputSchema } from './PaymentActionsUpsertWithoutRefundRequestInputSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateToOneWithWhereWithoutRefundRequestInputSchema } from './PaymentActionsUpdateToOneWithWhereWithoutRefundRequestInputSchema';
import { PaymentActionsUpdateWithoutRefundRequestInputSchema } from './PaymentActionsUpdateWithoutRefundRequestInputSchema';
import { PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema } from './PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema';

export const PaymentActionsUpdateOneRequiredWithoutRefundRequestNestedInputSchema: z.ZodType<Prisma.PaymentActionsUpdateOneRequiredWithoutRefundRequestNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutRefundRequestInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutRefundRequestInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentActionsCreateOrConnectWithoutRefundRequestInputSchema).optional(),
  upsert: z.lazy(() => PaymentActionsUpsertWithoutRefundRequestInputSchema).optional(),
  connect: z.lazy(() => PaymentActionsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PaymentActionsUpdateToOneWithWhereWithoutRefundRequestInputSchema),z.lazy(() => PaymentActionsUpdateWithoutRefundRequestInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutRefundRequestInputSchema) ]).optional(),
}).strict();

export default PaymentActionsUpdateOneRequiredWithoutRefundRequestNestedInputSchema;
