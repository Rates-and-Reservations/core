import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { PaymentActionsSelectSchema } from '../inputTypeSchemas/PaymentActionsSelectSchema';
import { PaymentActionsIncludeSchema } from '../inputTypeSchemas/PaymentActionsIncludeSchema';

export const PaymentActionsArgsSchema: z.ZodType<Prisma.PaymentActionsDefaultArgs> = z.object({
  select: z.lazy(() => PaymentActionsSelectSchema).optional(),
  include: z.lazy(() => PaymentActionsIncludeSchema).optional(),
}).strict();

export default PaymentActionsArgsSchema;
