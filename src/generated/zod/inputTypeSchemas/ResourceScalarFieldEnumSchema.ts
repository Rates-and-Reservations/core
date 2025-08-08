import { z } from 'zod';

export const ResourceScalarFieldEnumSchema = z.enum(['id','merchantId','name','description','capacity','minDuration','maxDuration','bufferTime','serviceLocationId','location','serviceArea','isVirtual','metadata','tags','isActive','isDeleted','deletedAt','createdAt','updatedAt','templateId']);

export default ResourceScalarFieldEnumSchema;
