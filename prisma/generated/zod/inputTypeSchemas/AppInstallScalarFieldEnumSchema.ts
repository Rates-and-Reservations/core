import { z } from 'zod';

export const AppInstallScalarFieldEnumSchema = z.enum(['id','merchantId','appId','status','installedAt','uninstalledAt','createdAt','updatedAt']);

export default AppInstallScalarFieldEnumSchema;
