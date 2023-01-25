import { expect, it, describe } from "vitest";
import { filterEvents } from "./events";

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
  },
];

const mockDay: Date = new Date('January 20, 2023');

const expectedCalendarData: any[]

describe("WHEN the filterEvents function receives data", () => {
  it("THEN returns a properly sorted and filtered events", () => {
    const { sortedAndFilteredEvents } = filterEvents(mockCalendarData, mockDay);
  });
});
