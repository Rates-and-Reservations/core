import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvoiceStatusSchema } from './InvoiceStatusSchema';

export const EnumInvoiceStatusFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumInvoiceStatusFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => InvoiceStatusSchema).optional()
}).strict();

export default EnumInvoiceStatusFieldUpdateOperationsInputSchema;
