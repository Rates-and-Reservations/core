import { z } from 'zod';

export const RateAddOnScalarFieldEnumSchema = z.enum(['id','rateId','addOnId','createdAt','updatedAt']);

export default RateAddOnScalarFieldEnumSchema;
