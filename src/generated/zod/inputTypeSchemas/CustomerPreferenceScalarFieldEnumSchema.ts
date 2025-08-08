import { z } from 'zod';

export const CustomerPreferenceScalarFieldEnumSchema = z.enum(['id','customerId','key','value','createdAt','updatedAt','isDeleted','deletedAt']);

export default CustomerPreferenceScalarFieldEnumSchema;
