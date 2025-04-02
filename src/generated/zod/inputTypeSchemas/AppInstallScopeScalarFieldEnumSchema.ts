import { z } from 'zod';

export const AppInstallScopeScalarFieldEnumSchema = z.enum(['id','appInstallId','scopeId','isDeleted','deletedAt','createdAt']);

export default AppInstallScopeScalarFieldEnumSchema;
