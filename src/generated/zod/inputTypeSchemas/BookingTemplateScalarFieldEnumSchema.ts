import { z } from 'zod';

export const BookingTemplateScalarFieldEnumSchema = z.enum(['id','merchantId','name','description','selectionMode','config','createdAt','updatedAt']);

export default BookingTemplateScalarFieldEnumSchema;
