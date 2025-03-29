import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateWithoutBookingInputSchema } from './PaymentActionsUpdateWithoutBookingInputSchema';
import { PaymentActionsUncheckedUpdateWithoutBookingInputSchema } from './PaymentActionsUncheckedUpdateWithoutBookingInputSchema';
import { PaymentActionsCreateWithoutBookingInputSchema } from './PaymentActionsCreateWithoutBookingInputSchema';
import { PaymentActionsUncheckedCreateWithoutBookingInputSchema } from './PaymentActionsUncheckedCreateWithoutBookingInputSchema';

export const PaymentActionsUpsertWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.PaymentActionsUpsertWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => PaymentActionsUpdateWithoutBookingInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutBookingInputSchema) ]),
  create: z.union([ z.lazy(() => PaymentActionsCreateWithoutBookingInputSchema),z.lazy(() => PaymentActionsUncheckedCreateWithoutBookingInputSchema) ]),
}).strict();

export default PaymentActionsUpsertWithWhereUniqueWithoutBookingInputSchema;
