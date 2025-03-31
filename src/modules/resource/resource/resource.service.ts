import prisma from '@/clients/prisma';
import { addMinutes, subMinutes, getDay, parseISO, format } from 'date-fns';

// Helper to get day name from JS date
const getDayName = (date: Date): string => format(date, 'EEEE');

export const isResourceAvailable = async (
  resourceId: string,
  desiredStart: Date,
  desiredEnd: Date
): Promise<boolean> => {
  // Fetch the resource's booking config
  const config = await prisma.resourceBookingConfig.findFirst({
    where: { resourceId },
  });

  if (!config) throw new Error('No booking config found for resource');

  // Apply buffer times
  const startWithBuffer = subMinutes(desiredStart, config.bufferTime);
  const endWithBuffer = addMinutes(desiredEnd, config.bufferTime);

  // Check if the request falls within allowed days/hours
  if (config.availableDays) {
    const availableDays = config.availableDays as Array<{
      day: string;
      open: string;
      close: string;
    }>;

    const dayName = getDayName(desiredStart);
    const configForDay = availableDays.find(d => d.day === dayName);
    if (!configForDay) return false;

    const [openHour, openMin] = configForDay.open.split(':').map(Number);
    const [closeHour, closeMin] = configForDay.close.split(':').map(Number);

    const startMinutes = desiredStart.getHours() * 60 + desiredStart.getMinutes();
    const endMinutes = desiredEnd.getHours() * 60 + desiredEnd.getMinutes();
    const openMinutes = openHour * 60 + openMin;
    const closeMinutes = closeHour * 60 + closeMin;

    if (startMinutes < openMinutes || endMinutes > closeMinutes) {
      return false;
    }
  }

  // Check for conflicting bookings
  const conflictingItems = await prisma.bookingItem.findMany({
    where: {
      booking: {
        status: { in: ['COMPLETED', 'CONFIRMED'] },
        bookingRequest: {
          resourceId,
        },
      },
      OR: [
        {
          startTime: { lt: endWithBuffer },
          endTime: { gt: startWithBuffer },
        },
      ],
    },
  });

  return conflictingItems.length === 0;
};
