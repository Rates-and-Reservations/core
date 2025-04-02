import { z } from 'zod';

export const BookingRequestActionValueScalarFieldEnumSchema = z.enum(['id','bookingRequestId','bookingActionId','value','completedAt','createdAt']);

export default BookingRequestActionValueScalarFieldEnumSchema;
