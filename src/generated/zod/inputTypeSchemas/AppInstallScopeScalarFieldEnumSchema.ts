import { z } from 'zod';

export const AppInstallScopeScalarFieldEnumSchema = z.enum(['id','appInstallId','scopeId','grantedAt','expiresAt','isDeleted','deletedAt','createdAt']);

export default AppInstallScopeScalarFieldEnumSchema;
