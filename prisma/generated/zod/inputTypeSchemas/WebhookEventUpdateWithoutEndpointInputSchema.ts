import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { WebhookEventTypeSchema } from './WebhookEventTypeSchema';
import { EnumWebhookEventTypeFieldUpdateOperationsInputSchema } from './EnumWebhookEventTypeFieldUpdateOperationsInputSchema';
import { JsonNullValueInputSchema } from './JsonNullValueInputSchema';
import { InputJsonValueSchema } from './InputJsonValueSchema';
import { WebhookEventStatusSchema } from './WebhookEventStatusSchema';
import { EnumWebhookEventStatusFieldUpdateOperationsInputSchema } from './EnumWebhookEventStatusFieldUpdateOperationsInputSchema';
import { NullableIntFieldUpdateOperationsInputSchema } from './NullableIntFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { MerchantUpdateOneRequiredWithoutWebhookEventNestedInputSchema } from './MerchantUpdateOneRequiredWithoutWebhookEventNestedInputSchema';
import { WebhookEventLogUpdateManyWithoutWebhookEventNestedInputSchema } from './WebhookEventLogUpdateManyWithoutWebhookEventNestedInputSchema';

export const WebhookEventUpdateWithoutEndpointInputSchema: z.ZodType<Prisma.WebhookEventUpdateWithoutEndpointInput> = z.object({
  id: z.union([ z.string().cuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  eventType: z.union([ z.lazy(() => WebhookEventTypeSchema),z.lazy(() => EnumWebhookEventTypeFieldUpdateOperationsInputSchema) ]).optional(),
  payload: z.union([ z.lazy(() => JsonNullValueInputSchema),InputJsonValueSchema ]).optional(),
  status: z.union([ z.lazy(() => WebhookEventStatusSchema),z.lazy(() => EnumWebhookEventStatusFieldUpdateOperationsInputSchema) ]).optional(),
  responseCode: z.union([ z.number().int(),z.lazy(() => NullableIntFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  responseBody: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  errorMessage: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  retryCount: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  nextRetryAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  sentAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  merchant: z.lazy(() => MerchantUpdateOneRequiredWithoutWebhookEventNestedInputSchema).optional(),
  WebhookEventLog: z.lazy(() => WebhookEventLogUpdateManyWithoutWebhookEventNestedInputSchema).optional()
}).strict();

export default WebhookEventUpdateWithoutEndpointInputSchema;
