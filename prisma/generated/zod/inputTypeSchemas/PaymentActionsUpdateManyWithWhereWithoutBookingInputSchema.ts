import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { PaymentActionsScalarWhereInputSchema } from './PaymentActionsScalarWhereInputSchema';
import { PaymentActionsUpdateManyMutationInputSchema } from './PaymentActionsUpdateManyMutationInputSchema';
import { PaymentActionsUncheckedUpdateManyWithoutBookingInputSchema } from './PaymentActionsUncheckedUpdateManyWithoutBookingInputSchema';

export const PaymentActionsUpdateManyWithWhereWithoutBookingInputSchema: z.ZodType<Prisma.PaymentActionsUpdateManyWithWhereWithoutBookingInput> = z.object({
  where: z.lazy(() => PaymentActionsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => PaymentActionsUpdateManyMutationInputSchema),z.lazy(() => PaymentActionsUncheckedUpdateManyWithoutBookingInputSchema) ]),
}).strict();

export default PaymentActionsUpdateManyWithWhereWithoutBookingInputSchema;
