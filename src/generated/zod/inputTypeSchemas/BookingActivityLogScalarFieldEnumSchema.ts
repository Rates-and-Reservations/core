import { z } from 'zod';

export const BookingActivityLogScalarFieldEnumSchema = z.enum(['id','merchantId','bookingId','userId','systemAction','action','previousValue','newValue','description','ipAddress','userAgent','performedAt','performedBy','createdAt']);

export default BookingActivityLogScalarFieldEnumSchema;
