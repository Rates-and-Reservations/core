import { z } from 'zod';

export const SavedSearchScalarFieldEnumSchema = z.enum(['id','merchantId','name','searchType','query','isShared','createdBy','createdAt','updatedAt']);

export default SavedSearchScalarFieldEnumSchema;
