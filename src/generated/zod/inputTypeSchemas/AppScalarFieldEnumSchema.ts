import { z } from 'zod';

export const AppScalarFieldEnumSchema = z.enum(['id','name','description','logoUrl','websiteUrl','category','merchantId','clientId','clientSecret','redirectUrls','webhookUrl','scopes','isPublic','isPublished','isActive','version','minVersion','rateLimitPerHour','isDeleted','deletedAt','createdAt','updatedAt']);

export default AppScalarFieldEnumSchema;
