import { z } from 'zod';

export const BookingConstraintScalarFieldEnumSchema = z.enum(['id','resourceId','constraintType','value','description','isActive','createdAt','updatedAt']);

export default BookingConstraintScalarFieldEnumSchema;
