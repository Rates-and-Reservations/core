import { z } from 'zod';

export const WebhookEventLogScalarFieldEnumSchema = z.enum(['id','eventId','attemptNumber','responseCode','responseBody','errorMessage','sentAt','createdAt']);

export default WebhookEventLogScalarFieldEnumSchema;
