import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { ResourceUpdateOneRequiredWithoutResourceAssetNestedInputSchema } from './ResourceUpdateOneRequiredWithoutResourceAssetNestedInputSchema';
import { MerchantAssetUpdateOneRequiredWithoutResourceAssetNestedInputSchema } from './MerchantAssetUpdateOneRequiredWithoutResourceAssetNestedInputSchema';

export const ResourceAssetUpdateInputSchema: z.ZodType<Prisma.ResourceAssetUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isPrimary: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  sortOrder: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  resource: z.lazy(() => ResourceUpdateOneRequiredWithoutResourceAssetNestedInputSchema).optional(),
  asset: z.lazy(() => MerchantAssetUpdateOneRequiredWithoutResourceAssetNestedInputSchema).optional()
}).strict();

export default ResourceAssetUpdateInputSchema;
