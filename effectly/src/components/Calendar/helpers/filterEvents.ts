import { fromUnixTime, isSameDay } from "date-fns";

type EventDateType = {
  seconds: number;
};

export const filterEvents = (calendarData: any[], calendarDay: Date) => {
  const filterByGivenDate = (givenDate: Date, eventDate: EventDateType) => {
    // Convert given dates to the same format
    const eventDateFormatted = fromUnixTime(eventDate.seconds);

    // Compare if the given date is the sam day as the event
    const areDaysEqual = isSameDay(givenDate, eventDateFormatted);

    return areDaysEqual;
  };

  // Return events that contain the current visible on the calendar
  const filteredEvents = calendarData.filter((event) =>
    filterByGivenDate(calendarDay, event.event_start)
  );

  return { filteredEvents };
};

// Return events' dates converted from timestamps to a proper date
export const convertDate = (timestamp: EventDateType) => {
  const UTCFormat = fromUnixTime(timestamp.seconds);
  const toLocaleDateString = UTCFormat.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return toLocaleDateString;
};
