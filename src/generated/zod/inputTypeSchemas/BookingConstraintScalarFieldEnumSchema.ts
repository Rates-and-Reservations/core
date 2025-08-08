import { z } from 'zod';

export const BookingConstraintScalarFieldEnumSchema = z.enum(['id','resourceId','constraintType','value','description','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingConstraintScalarFieldEnumSchema;
