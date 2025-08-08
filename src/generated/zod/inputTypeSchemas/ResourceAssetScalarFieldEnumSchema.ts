import { z } from 'zod';

export const ResourceAssetScalarFieldEnumSchema = z.enum(['id','resourceId','assetId','isPrimary','sortOrder','isDeleted','deletedAt','createdAt','updatedAt']);

export default ResourceAssetScalarFieldEnumSchema;
