import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsWhereUniqueInputSchema } from './PaymentActionsWhereUniqueInputSchema';
import { PaymentActionsUpdateWithoutBookingInputSchema } from './PaymentActionsUpdateWithoutBookingInputSchema';
import { PaymentActionsUncheckedUpdateWithoutBookingInputSchema } from './PaymentActionsUncheckedUpdateWithoutBookingInputSchema';

export const PaymentActionsUpdateWithWhereUniqueWithoutBookingInputSchema: z.ZodType<Prisma.PaymentActionsUpdateWithWhereUniqueWithoutBookingInput> = z.object({
  where: z.lazy(() => PaymentActionsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => PaymentActionsUpdateWithoutBookingInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateWithoutBookingInputSchema) ]),
}).strict();

export default PaymentActionsUpdateWithWhereUniqueWithoutBookingInputSchema;
