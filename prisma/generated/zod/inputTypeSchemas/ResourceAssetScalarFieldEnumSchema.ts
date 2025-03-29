import { z } from 'zod';

export const ResourceAssetScalarFieldEnumSchema = z.enum(['id','resourceId','assetId','isPrimary','sortOrder','createdAt','updatedAt']);

export default ResourceAssetScalarFieldEnumSchema;
