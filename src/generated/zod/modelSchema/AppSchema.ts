import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// APP SCHEMA
/////////////////////////////////////////

/**
 * App: Represents a third-party app or integration
 * @group App
 */
export const AppSchema = z.object({
  id: z.string().cuid(),
  name: z.string(),
  description: z.string().nullable(),
  logoUrl: z.string().nullable(),
  websiteUrl: z.string().nullable(),
  category: z.string().nullable(),
  merchantId: z.string(),
  clientId: z.string().nullable(),
  clientSecret: z.string().nullable(),
  redirectUrls: JsonValueSchema.nullable(),
  webhookUrl: z.string().nullable(),
  scopes: JsonValueSchema.nullable(),
  isPublic: z.boolean(),
  isPublished: z.boolean(),
  isActive: z.boolean(),
  version: z.string(),
  minVersion: z.string().nullable(),
  rateLimitPerHour: z.number().int().nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type App = z.infer<typeof AppSchema>

export default AppSchema;
