import { z } from 'zod';
import { JsonValueSchema } from '../inputTypeSchemas/JsonValueSchema'

/////////////////////////////////////////
// SAVED SEARCH SCHEMA
/////////////////////////////////////////

/**
 * SavedSearch: Represents saved search queries
 * @group Search
 */
export const SavedSearchSchema = z.object({
  id: z.string().cuid(),
  merchantId: z.string(),
  name: z.string(),
  searchType: z.string(),
  query: JsonValueSchema,
  isShared: z.boolean(),
  createdBy: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type SavedSearch = z.infer<typeof SavedSearchSchema>

export default SavedSearchSchema;
