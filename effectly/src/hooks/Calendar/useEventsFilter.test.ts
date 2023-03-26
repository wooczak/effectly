import { renderHook } from "@testing-library/react";
import useEventsFilter from "./useEventsFilter";

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

const expectedCalendarData: any = [mockCalendarData[2], mockCalendarData[1]];

const mockDay: Date = new Date("January 20, 2023");

describe("WHEN the useEventsFilter hook receives data", () => {
  it("THEN returns a properly sorted and filtered events", () => {
    const { result } = renderHook(() => useEventsFilter(mockCalendarData, mockDay));

    expect(result.current.sortedAndFilteredEvents).toEqual(expectedCalendarData);
  });
});