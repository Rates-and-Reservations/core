import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ResourceUpdateOneRequiredWithoutResourceAssetNestedInputSchema } from './ResourceUpdateOneRequiredWithoutResourceAssetNestedInputSchema';

export const ResourceAssetUpdateWithoutAssetInputSchema: z.ZodType<Prisma.ResourceAssetUpdateWithoutAssetInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPrimary: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sortOrder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  resource: z.lazy(() => ResourceUpdateOneRequiredWithoutResourceAssetNestedInputSchema).optional()
}).strict();

export default ResourceAssetUpdateWithoutAssetInputSchema;
