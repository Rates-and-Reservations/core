import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsCreateWithoutBookingInputSchema } from './PaymentActionsCreateWithoutBookingInputSchema';
import { PaymentActionsUncheckedCreateWithoutBookingInputSchema } from './PaymentActionsUncheckedCreateWithoutBookingInputSchema';

export const PaymentActionsCreateOrConnectWithoutBookingInputSchema: z.ZodType<Prisma.PaymentActionsCreateOrConnectWithoutBookingInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutBookingInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default PaymentActionsCreateOrConnectWithoutBookingInputSchema;
