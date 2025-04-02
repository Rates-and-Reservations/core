import { z } from 'zod';

export const RateAddOnScalarFieldEnumSchema = z.enum(['id','rateId','addOnId','isDeleted','deletedAt','createdAt','updatedAt']);

export default RateAddOnScalarFieldEnumSchema;
