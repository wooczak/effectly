import { fromUnixTime, isSameDay } from "date-fns";
import { useCallback, useMemo } from "react";

type EventDateType = {
  seconds: number;
};

const useEventsFilter = (calendarData: any[], calendarDay: Date) => {
  const filterByGivenDate = useCallback(
    (givenDate: Date, eventDate: EventDateType) => {
      // Convert given dates to the same format
      const eventDateFormatted = fromUnixTime(eventDate.seconds);

      // Compare if the given date is the sam day as the event
      const areDaysEqual = isSameDay(givenDate, eventDateFormatted);

      return areDaysEqual;
    },
    [calendarData, calendarDay]
  );

  // Return events that contain the current visible on the calendar
  const filteredEvents = useMemo(
    () =>
      calendarData.filter((event) =>
        filterByGivenDate(calendarDay, event.event_start)
      ),
    [filterByGivenDate, calendarData, calendarDay]
  );

  // Return filtered events as sorted by their start time
  const sortedAndFilteredEvents = useMemo(
    () =>
      filteredEvents.sort(
        (prevEvent, nextEvent) =>
          prevEvent.event_start.seconds - nextEvent.event_start.seconds
      ),
    [filteredEvents]
  );

  return { sortedAndFilteredEvents };
};

export default useEventsFilter;