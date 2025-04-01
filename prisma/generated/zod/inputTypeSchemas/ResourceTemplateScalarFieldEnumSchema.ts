import { z } from 'zod';

export const ResourceTemplateScalarFieldEnumSchema = z.enum(['id','merchantId','name','category','description','defaultFields','isActive','createdAt','updatedAt']);

export default ResourceTemplateScalarFieldEnumSchema;
