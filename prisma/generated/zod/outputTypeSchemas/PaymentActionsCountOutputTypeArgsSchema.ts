import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentActionsCountOutputTypeSelectSchema } from './PaymentActionsCountOutputTypeSelectSchema';

export const PaymentActionsCountOutputTypeArgsSchema: z.ZodType<Prisma.PaymentActionsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => PaymentActionsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default PaymentActionsCountOutputTypeSelectSchema;
