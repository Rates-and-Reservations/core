import { z } from 'zod';

export const RateAddOnScalarFieldEnumSchema = z.enum(['id','rateId','addOnId','isRequired','isDeleted','deletedAt','createdAt','updatedAt']);

export default RateAddOnScalarFieldEnumSchema;
