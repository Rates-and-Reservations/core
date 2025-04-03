import { z } from 'zod';

export const BookingScalarFieldEnumSchema = z.enum(['id','merchantId','customerId','bookingRequestId','startTime','endTime','notes','internalNotes','metadata','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingScalarFieldEnumSchema;
