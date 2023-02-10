import { expect, it, describe } from "vitest";
import { filterEvents, convertDate, getEventsMath } from "./events";

const mockCalendarData: any[] = [
  {
    event_name: "test-event-one",
    event_location: "test-location-one",
    event_start: {
      seconds: 1672326000,
    },
  },
  {
    event_name: "test-event-two",
    event_location: "test-location-two",
    event_start: {
      seconds: 1674223200,
    },
  },
  {
    event_name: "test-event-three",
    event_location: "test-location-three",
    event_start: {
      seconds: 1674219600,
    },
    event_end: {
      seconds: 1674234000,
    },
  },
];

const mockDay: Date = new Date("January 20, 2023");

const expectedCalendarData: any = [mockCalendarData[2], mockCalendarData[1]];

describe("WHEN the filterEvents function receives data", () => {
  it("THEN returns a properly sorted and filtered events", () => {
    const { sortedAndFilteredEvents } = filterEvents(mockCalendarData, mockDay);

    expect(sortedAndFilteredEvents).toEqual(expectedCalendarData);
  });
});

describe("WHEN the convertDate function receives date as a timestamp", () => {
  it("THEN it should return the date in a specific locale date string", () => {
    const returnedDate = convertDate(mockCalendarData[2].event_start);

    expect(returnedDate).toEqual("14:00");
  });
});

describe("WHEN the getEventsMath function receives data", () => {
  it("THEN should return duration of th event and the interval from midnight to the event start", () => {
    const eventStart = mockCalendarData[2].event_start;
    const eventEnd = mockCalendarData[2].event_end;

    const { intervalInMinutes, durationInMinutes } = getEventsMath(
      mockDay,
      eventStart,
      eventEnd
    );

    expect(intervalInMinutes).toEqual(841); // 841 minutes from midnight to event_start
    expect(durationInMinutes).toEqual(240); // duration equals 240 minutes
  });
});
