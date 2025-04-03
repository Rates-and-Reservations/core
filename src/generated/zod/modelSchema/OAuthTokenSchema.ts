import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// O AUTH TOKEN SCHEMA
/////////////////////////////////////////

/**
 * @group App
 */
export const OAuthTokenSchema = z.object({
  id: z.string().cuid(),
  appId: z.string(),
  merchantId: z.string(),
  accessToken: z.string(),
  refreshToken: z.string().nullable(),
  expiresAt: z.coerce.date().nullable(),
  scopes: JsonValueSchema.nullable(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type OAuthToken = z.infer<typeof OAuthTokenSchema>

export default OAuthTokenSchema;
