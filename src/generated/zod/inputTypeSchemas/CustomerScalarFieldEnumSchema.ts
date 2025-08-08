import { z } from 'zod';

export const CustomerScalarFieldEnumSchema = z.enum(['id','merchantId','name','email','phone','address','city','postcode','country','preferredLanguage','preferredTimezone','loyaltyPoints','totalBookings','totalSpent','tags','notes','metadata','isDeleted','deletedAt','createdAt','updatedAt']);

export default CustomerScalarFieldEnumSchema;
