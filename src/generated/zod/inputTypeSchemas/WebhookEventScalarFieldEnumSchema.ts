import { z } from 'zod';

export const WebhookEventScalarFieldEnumSchema = z.enum(['id','merchantId','endpointId','eventType','payload','status','responseCode','responseBody','errorMessage','retryCount','maxRetries','nextRetryAt','sentAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default WebhookEventScalarFieldEnumSchema;
