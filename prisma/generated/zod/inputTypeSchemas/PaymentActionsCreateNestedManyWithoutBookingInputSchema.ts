import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsCreateWithoutBookingInputSchema } from './PaymentActionsCreateWithoutBookingInputSchema';
import { PaymentActionsUncheckedCreateWithoutBookingInputSchema } from './PaymentActionsUncheckedCreateWithoutBookingInputSchema';
import { PaymentActionsCreateOrConnectWithoutBookingInputSchema } from './PaymentActionsCreateOrConnectWithoutBookingInputSchema';
import { PaymentActionsCreateManyBookingInputEnvelopeSchema } from './PaymentActionsCreateManyBookingInputEnvelopeSchema';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';

export const PaymentActionsCreateNestedManyWithoutBookingInputSchema: z.ZodType<Prisma.PaymentActionsCreateNestedManyWithoutBookingInput> = z.object({
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutBookingInputSchema),z.lazy(() => PaymentActionsCreateWithoutBookingInputSchema).array(),z.lazy(() => PaymentActionsUncheckedCreateWithoutBookingInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutBookingInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => PaymentActionsCreateOrConnectWithoutBookingInputSchema),z.lazy(() => PaymentActionsCreateOrConnectWithoutBookingInputSchema).array() ]).optional(),
  createMany: z.lazy(() => PaymentActionsCreateManyBookingInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => PaymentActionsWhereUniqueInputSchema),z.lazy(() => PaymentActionsWhereUniqueInputSchema).array() ]).optional(),
}).strict();

export default PaymentActionsCreateNestedManyWithoutBookingInputSchema;
