import { z } from 'zod';

export const BookingTemplateScalarFieldEnumSchema = z.enum(['id','merchantId','name','description','selectionMode','config','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingTemplateScalarFieldEnumSchema;
