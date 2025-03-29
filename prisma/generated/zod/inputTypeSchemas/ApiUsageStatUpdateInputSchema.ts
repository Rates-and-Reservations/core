import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutApiUsageStatNestedInputSchema } from './MerchantUpdateOneRequiredWithoutApiUsageStatNestedInputSchema';
import { ApiKeyUpdateOneRequiredWithoutApiUsageStatNestedInputSchema } from './ApiKeyUpdateOneRequiredWithoutApiUsageStatNestedInputSchema';

export const ApiUsageStatUpdateInputSchema: z.ZodType<Prisma.ApiUsageStatUpdateInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  date: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  requestCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  successCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  errorCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  rateLimitHits: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutApiUsageStatNestedInputSchema).optional(),
  apiKey: z.lazy(() => ApiKeyUpdateOneRequiredWithoutApiUsageStatNestedInputSchema).optional()
}).strict();

export default ApiUsageStatUpdateInputSchema;
