import { z } from 'zod';

export const AppInstallScalarFieldEnumSchema = z.enum(['id','merchantId','appId','status','installedAt','uninstalledAt','isDeleted','deletedAt','createdAt','updatedAt']);

export default AppInstallScalarFieldEnumSchema;
