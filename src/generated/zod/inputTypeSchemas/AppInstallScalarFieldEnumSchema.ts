import { z } from 'zod';

export const AppInstallScalarFieldEnumSchema = z.enum(['id','merchantId','appId','status','config','installedAt','uninstalledAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default AppInstallScalarFieldEnumSchema;
