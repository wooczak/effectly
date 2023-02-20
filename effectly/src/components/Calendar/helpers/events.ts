import { useCallback, useMemo } from "react";

import {
  fromUnixTime,
  isSameDay,
  intervalToDuration,
  set,
  hoursToMinutes,
} from "date-fns";

type EventDateType = {
  seconds: number;
};

export const filterEvents = (calendarData: any[], calendarDay: Date) => {
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

// Return events' dates converted from timestamps to a proper date
export const convertDate = (timestamp: EventDateType) => {
  const UTCFormat = fromUnixTime(timestamp.seconds);
  const toLocaleDateString = UTCFormat.toLocaleTimeString([], {
    hourCycle: "h23",
    hour: "2-digit",
    minute: "2-digit",
  });

  return toLocaleDateString;
};

export const getEventsMath = (
  visibleDay: Date,
  eventStart: EventDateType,
  eventEnd: EventDateType
) => {
  const eventStartFormatted = fromUnixTime(eventStart.seconds);
  const eventEndFormatted = fromUnixTime(eventEnd.seconds);

  // Calculates how many minutes have passed since the beginning of the day
  const midnight = set(visibleDay, { hours: 0, minutes: 0, seconds: 0 });
  const intervalfromMidnight = intervalToDuration({
    start: midnight,
    end: eventStartFormatted,
  });
  const intervalInMinutes =
    hoursToMinutes(intervalfromMidnight.hours as number) +
    (intervalfromMidnight.minutes as number) +
    1;

  // Calculates the duration of the event
  const duration = intervalToDuration({
    start: eventStartFormatted,
    end: eventEndFormatted,
  });
  const durationInMinutes =
    hoursToMinutes(duration.hours as number) + (duration.minutes as number);

  return { intervalInMinutes, durationInMinutes };
};
