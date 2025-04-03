import { z } from 'zod';

export const BookingItemScalarFieldEnumSchema = z.enum(['id','bookingId','startTime','endTime','currentStatus','bookingRateSnapshotId','isDeleted','deletedAt','createdAt','updatedAt']);

export default BookingItemScalarFieldEnumSchema;
