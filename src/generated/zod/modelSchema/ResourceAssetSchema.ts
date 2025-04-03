import { z } from 'zod';

/////////////////////////////////////////
// RESOURCE ASSET SCHEMA
/////////////////////////////////////////

/**
 * @group Inventory
 */
export const ResourceAssetSchema = z.object({
  id: z.string().cuid(),
  resourceId: z.string(),
  assetId: z.string(),
  isPrimary: z.boolean(),
  sortOrder: z.number().int(),
  isDeleted: z.boolean(),
  deletedAt: z.coerce.date().nullable(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type ResourceAsset = z.infer<typeof ResourceAssetSchema>

export default ResourceAssetSchema;
