import { z } from 'zod';

export const ServiceLocationScalarFieldEnumSchema = z.enum(['id','merchantId','name','address','city','country','postcode','latitude','longitude','timezone','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default ServiceLocationScalarFieldEnumSchema;
