import { z } from 'zod';

export const AppScopeScalarFieldEnumSchema = z.enum(['id','name','description','createdAt']);

export default AppScopeScalarFieldEnumSchema;
