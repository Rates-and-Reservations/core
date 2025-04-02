import { z } from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum(['id','merchantId','name','email','phone','address','city','postcode','country','metadata','isDeleted','deletedAt','createdAt','updatedAt']);

export default CustomerScalarFieldEnumSchema;
