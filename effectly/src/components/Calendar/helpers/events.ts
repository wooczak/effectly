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
  const intervalStartFromMidnight = intervalToDuration({
    start: midnight,
    end: eventStartFormatted,
  });
  const intervalEndFromMidnight = intervalToDuration({
    start: midnight,
    end: eventEndFormatted,
  });
  const intervalStartInMinutes =
    hoursToMinutes(intervalStartFromMidnight.hours as number) +
    (intervalStartFromMidnight.minutes as number) +
    1;
  const intervalEndInMinutes =
    hoursToMinutes(intervalEndFromMidnight.hours as number) +
    (intervalEndFromMidnight.minutes as number) +
    1;

  const assignGridRow = (intervalInMinutes: number) => {
    let min = 1;
    let max = 30;
    for (let i = 1; i <= 49; i++) {
      if (intervalInMinutes >= min && intervalInMinutes <= max) {
        return i;
      } else {
        min += 30;
        max += 30;
      }
    }
  };

  const calendarGridRowStart = assignGridRow(intervalStartInMinutes);
  const calendarGridRowEnd = assignGridRow(intervalEndInMinutes);

  return { calendarGridRowStart, calendarGridRowEnd };
};
