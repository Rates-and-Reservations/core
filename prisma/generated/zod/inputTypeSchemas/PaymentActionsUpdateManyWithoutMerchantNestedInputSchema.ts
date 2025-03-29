import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutMerchantInputSchema } from './PaymentActionsCreateWithoutMerchantInputSchema';
import { PaymentActionsUncheckedCreateWithoutMerchantInputSchema } from './PaymentActionsUncheckedCreateWithoutMerchantInputSchema';
import { PaymentActionsCreateOrConnectWithoutMerchantInputSchema } from './PaymentActionsCreateOrConnectWithoutMerchantInputSchema';
import { PaymentActionsUpsertWithWhereUniqueWithoutMerchantInputSchema } from './PaymentActionsUpsertWithWhereUniqueWithoutMerchantInputSchema';
import { PaymentActionsCreateManyMerchantInputEnvelopeSchema } from './PaymentActionsCreateManyMerchantInputEnvelopeSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateWithWhereUniqueWithoutMerchantInputSchema } from './PaymentActionsUpdateWithWhereUniqueWithoutMerchantInputSchema';
import { PaymentActionsUpdateManyWithWhereWithoutMerchantInputSchema } from './PaymentActionsUpdateManyWithWhereWithoutMerchantInputSchema';
import { PaymentActionsScalarWhereInputSchema } from './PaymentActionsScalarWhereInputSchema';

export const PaymentActionsUpdateManyWithoutMerchantNestedInputSchema: z.ZodType<Prisma.PaymentActionsUpdateManyWithoutMerchantNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutMerchantInputSchema),z.lazy(() => PaymentActionsCreateWithoutMerchantInputSchema).array(),z.lazy(() => PaymentActionsUncheckedCreateWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutMerchantInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentActionsCreateOrConnectWithoutMerchantInputSchema),z.lazy(() => PaymentActionsCreateOrConnectWithoutMerchantInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentActionsUpsertWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUpsertWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentActionsCreateManyMerchantInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentActionsUpdateWithWhereUniqueWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUpdateWithWhereUniqueWithoutMerchantInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentActionsUpdateManyWithWhereWithoutMerchantInputSchema),z.lazy(() => PaymentActionsUpdateManyWithWhereWithoutMerchantInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentActionsScalarWhereInputSchema),z.lazy(() => PaymentActionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PaymentActionsUpdateManyWithoutMerchantNestedInputSchema;
