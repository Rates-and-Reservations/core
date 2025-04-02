import { z } from 'zod';

export const AppScalarFieldEnumSchema = z.enum(['id','name','description','logoUrl','websiteUrl','merchantId','clientId','clientSecret','redirectUrls','webhookUrl','scopes','isPublic','isPublished','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default AppScalarFieldEnumSchema;
