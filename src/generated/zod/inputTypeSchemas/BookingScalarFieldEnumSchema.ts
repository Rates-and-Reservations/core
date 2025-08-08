import { z } from 'zod';

export const BookingScalarFieldEnumSchema = z.enum(['id','merchantId','customerId','resourceId','rateId','startTime','endTime','partySize','basePrice','totalPrice','taxAmount','currency','currentStatus','notes','internalNotes','metadata','isDeleted','deletedAt','createdAt','updatedAt','bookingRequestId']);

export default BookingScalarFieldEnumSchema;
