import { z } from 'zod';

export const ResourceScalarFieldEnumSchema = z.enum(['id','merchantId','templateId','name','description','capacity','metadata','tags','isActive','createdAt','updatedAt']);

export default ResourceScalarFieldEnumSchema;
