import { z } from 'zod';

export const AddOnScalarFieldEnumSchema = z.enum(['id','merchantId','name','description','price','currency','showInBooking','isActive','isDeleted','deletedAt','createdAt','updatedAt']);

export default AddOnScalarFieldEnumSchema;
