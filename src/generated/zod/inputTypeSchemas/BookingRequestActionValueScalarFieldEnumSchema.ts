import { z } from 'zod';

export const BookingRequestActionValueScalarFieldEnumSchema = z.enum(['id','bookingRequestId','bookingActionId','value','completedAt','isDeleted','deletedAt','createdAt']);

export default BookingRequestActionValueScalarFieldEnumSchema;
