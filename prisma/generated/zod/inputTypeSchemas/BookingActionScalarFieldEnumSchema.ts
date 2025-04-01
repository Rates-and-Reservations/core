import { z } from 'zod';

export const BookingActionScalarFieldEnumSchema = z.enum(['id','bookingTemplateId','name','type','config','required','createdAt','updatedAt']);

export default BookingActionScalarFieldEnumSchema;
