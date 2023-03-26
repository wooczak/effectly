import { expect, it, describe } from "vitest";
import { areEventsFetched, convertDate, getEventsMath } from "./events";

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

describe("WHEN the convertDate function receives date as a timestamp", () => {
  it("THEN it should return the date in a specific locale date string", () => {
    const returnedDate = convertDate(mockCalendarData[2].event_start);

    expect(returnedDate).toEqual("14:00");
  });
});

describe("WHEN the getEventsMath function receives data", () => {
  it("THEN should return proper values for the grid-row-start and grid-row-end for the event", () => {
    const eventStart = mockCalendarData[2].event_start;
    const eventEnd = mockCalendarData[2].event_end;

    const { calendarGridRowStart, calendarGridRowEnd } = getEventsMath(
      mockDay,
      eventStart,
      eventEnd
    );

    expect(calendarGridRowStart).toEqual(29);
    expect(calendarGridRowEnd).toEqual(37);
  });
});

describe("WHEN the areEventsFetched function is called", () => {
  describe("AND it receives a proper payload", () => {
    it("THEN should return true", () => {
      const properPayload: any[] = ["test", "payload"];
      const result = areEventsFetched(properPayload);
      expect(result).toEqual(true);
    });
  });

  describe("AND it does not receive a proper payload", () => {
    it("THEN should return false", () => {
      const improperPayload: any[] = [];
      const result = areEventsFetched(improperPayload);
      expect(result).toEqual(false);
    });
  });
});
