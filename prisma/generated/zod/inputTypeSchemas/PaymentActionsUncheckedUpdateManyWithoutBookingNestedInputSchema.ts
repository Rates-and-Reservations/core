import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutBookingInputSchema } from './PaymentActionsCreateWithoutBookingInputSchema';
import { PaymentActionsUncheckedCreateWithoutBookingInputSchema } from './PaymentActionsUncheckedCreateWithoutBookingInputSchema';
import { PaymentActionsCreateOrConnectWithoutBookingInputSchema } from './PaymentActionsCreateOrConnectWithoutBookingInputSchema';
import { PaymentActionsUpsertWithWhereUniqueWithoutBookingInputSchema } from './PaymentActionsUpsertWithWhereUniqueWithoutBookingInputSchema';
import { PaymentActionsCreateManyBookingInputEnvelopeSchema } from './PaymentActionsCreateManyBookingInputEnvelopeSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateWithWhereUniqueWithoutBookingInputSchema } from './PaymentActionsUpdateWithWhereUniqueWithoutBookingInputSchema';
import { PaymentActionsUpdateManyWithWhereWithoutBookingInputSchema } from './PaymentActionsUpdateManyWithWhereWithoutBookingInputSchema';
import { PaymentActionsScalarWhereInputSchema } from './PaymentActionsScalarWhereInputSchema';

export const PaymentActionsUncheckedUpdateManyWithoutBookingNestedInputSchema: z.ZodType<Prisma.PaymentActionsUncheckedUpdateManyWithoutBookingNestedInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutBookingInputSchema),z.lazy(() => PaymentActionsCreateWithoutBookingInputSchema).array(),z.lazy(() => PaymentActionsUncheckedCreateWithoutBookingInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentActionsCreateOrConnectWithoutBookingInputSchema),z.lazy(() => PaymentActionsCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => PaymentActionsUpsertWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => PaymentActionsUpsertWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentActionsCreateManyBookingInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => PaymentActionsUpdateWithWhereUniqueWithoutBookingInputSchema),z.lazy(() => PaymentActionsUpdateWithWhereUniqueWithoutBookingInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => PaymentActionsUpdateManyWithWhereWithoutBookingInputSchema),z.lazy(() => PaymentActionsUpdateManyWithWhereWithoutBookingInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => PaymentActionsScalarWhereInputSchema),z.lazy(() => PaymentActionsScalarWhereInputSchema).array() ]).optional(),
}).strict();

export default PaymentActionsUncheckedUpdateManyWithoutBookingNestedInputSchema;
