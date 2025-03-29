import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutRefundLogInputSchema } from './PaymentActionsCreateWithoutRefundLogInputSchema';
import { PaymentActionsUncheckedCreateWithoutRefundLogInputSchema } from './PaymentActionsUncheckedCreateWithoutRefundLogInputSchema';
import { PaymentActionsCreateOrConnectWithoutRefundLogInputSchema } from './PaymentActionsCreateOrConnectWithoutRefundLogInputSchema';
import { PaymentActionsUpsertWithoutRefundLogInputSchema } from './PaymentActionsUpsertWithoutRefundLogInputSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateToOneWithWhereWithoutRefundLogInputSchema } from './PaymentActionsUpdateToOneWithWhereWithoutRefundLogInputSchema';
import { PaymentActionsUpdateWithoutRefundLogInputSchema } from './PaymentActionsUpdateWithoutRefundLogInputSchema';
import { PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema } from './PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema';

export const PaymentActionsUpdateOneRequiredWithoutRefundLogNestedInputSchema: z.ZodType<Prisma.PaymentActionsUpdateOneRequiredWithoutRefundLogNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutRefundLogInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutRefundLogInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => PaymentActionsCreateOrConnectWithoutRefundLogInputSchema).optional(),
  upsert: z.lazy(() => PaymentActionsUpsertWithoutRefundLogInputSchema).optional(),
  connect: z.lazy(() => PaymentActionsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => PaymentActionsUpdateToOneWithWhereWithoutRefundLogInputSchema),z.lazy(() => PaymentActionsUpdateWithoutRefundLogInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutRefundLogInputSchema) ]).optional(),
}).strict();

export default PaymentActionsUpdateOneRequiredWithoutRefundLogNestedInputSchema;
