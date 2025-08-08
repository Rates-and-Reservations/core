import { z } from 'zod';

export const SystemEventScalarFieldEnumSchema = z.enum(['id','eventType','entityId','entityType','payload','processed','processedAt','createdAt']);

export default SystemEventScalarFieldEnumSchema;
