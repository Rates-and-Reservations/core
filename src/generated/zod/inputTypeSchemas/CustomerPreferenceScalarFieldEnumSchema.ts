import { z } from 'zod';

export const CustomerPreferenceScalarFieldEnumSchema = z.enum(['id','customerId','key','value','createdAt','updatedAt']);

export default CustomerPreferenceScalarFieldEnumSchema;
