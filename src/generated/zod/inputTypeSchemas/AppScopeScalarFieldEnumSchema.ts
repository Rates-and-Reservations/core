import { z } from 'zod';

export const AppScopeScalarFieldEnumSchema = z.enum(['id','name','description','isDeleted','deletedAt','createdAt']);

export default AppScopeScalarFieldEnumSchema;
