import { z } from 'zod';

export const ResourceTemplateScalarFieldEnumSchema = z.enum(['id','merchantId','name','category','description','defaultFields','isDeleted','deletedAt','createdAt','updatedAt']);

export default ResourceTemplateScalarFieldEnumSchema;
