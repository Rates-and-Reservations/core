import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutMerchantAssetNestedInputSchema } from './MerchantUpdateOneRequiredWithoutMerchantAssetNestedInputSchema';
import { ResourceAssetUpdateManyWithoutAssetNestedInputSchema } from './ResourceAssetUpdateManyWithoutAssetNestedInputSchema';

export const MerchantAssetUpdateInputSchema: z.ZodType<Prisma.MerchantAssetUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  url: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  publicId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutMerchantAssetNestedInputSchema).optional(),
  ResourceAsset: z.lazy(() => ResourceAssetUpdateManyWithoutAssetNestedInputSchema).optional()
}).strict();

export default MerchantAssetUpdateInputSchema;
