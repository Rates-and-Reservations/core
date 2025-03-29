import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { TaxTypeSchema } from './TaxTypeSchema';

export const EnumTaxTypeFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumTaxTypeFieldUpdateOperationsInput> = z.object({
  set: z.lazy(() => TaxTypeSchema).optional()
}).strict();

export default EnumTaxTypeFieldUpdateOperationsInputSchema;
