import { fromUnixTime, isSameDay } from "date-fns";

type EventDateType = {
  seconds: number;
};

const useFilteredEvents = (calendarData: any[], calendarDay: Date) => {
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

export default useFilteredEvents;
