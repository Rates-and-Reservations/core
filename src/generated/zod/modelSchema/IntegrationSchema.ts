import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'
import { IntegrationTypeSchema } from '../inputTypeSchemas/IntegrationTypeSchema'

/////////////////////////////////////////
// INTEGRATION SCHEMA
/////////////////////////////////////////

/**
 * Integration: External system integrations
 * @group Integration
 */
export const IntegrationSchema = z.object({
  integrationType: IntegrationTypeSchema,
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  config: JsonValueSchema,
  credentials: JsonValueSchema,
  isActive: z.boolean(),
  lastSyncAt: z.coerce.date().nullable(),
  lastSyncStatus: z.string().nullable(),
  syncErrors: JsonValueSchema.nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Integration = z.infer<typeof IntegrationSchema>

export default IntegrationSchema;
