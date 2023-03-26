import { render, screen, waitFor } from "@testing-library/react";
import { describe, it } from "vitest";
import Events from "./Events";

type MockEventType = {
  event_name: string;
  event_start: { seconds: number };
  event_end: { seconds: number };
}[];

let eventInfoWrapper: HTMLElement;
let eventTimeParagraph: HTMLElement;

const mockLongerEvent = [
  {
    // 25 March 2023 17:00:00 - 19:00:00
    event_name: "Event 1",
    event_start: {
      seconds: 1679763600,
    },
    event_end: {
      seconds: 1679770800,
    },
  },
];

const mockShorterEvent = [
  {
    // 25 March 2023 9:00:00-9:30:00
    event_name: "Event 2",
    event_start: {
      seconds: 1679734800,
    },
    event_end: {
      seconds: 1679736600,
    },
  },
];

const mockVisibleDay: Date = new Date("March 25, 2023 16:00:00");

const renderEventsComponent = (event: MockEventType) => {
  render(<Events events={event} visibleDay={mockVisibleDay} />);
  eventInfoWrapper = screen.getByTestId("event-info");
  eventTimeParagraph = screen.getByTestId("event-time-paragraph");
};

describe("WHEN the Events component is rendered with a longer event", () => {
  beforeEach(() => renderEventsComponent(mockLongerEvent));

  it("THEN should contain a specific data regarding its start & end grid row", () => {
    expect(eventInfoWrapper.getAttribute("start")).toEqual("38");
    expect(eventInfoWrapper.getAttribute("end")).toEqual("42");
  });

  it("THEN should not have a class name for short event", () => {
    expect(eventTimeParagraph).not.toHaveClass("short-event");
  });
});

describe("WHEN the Events component is rendered with a shorter event", () => {
  beforeEach(() => renderEventsComponent(mockShorterEvent));

  it("THEN should contain a specific data regarding its start & end grid row", () => {
    expect(eventInfoWrapper.getAttribute("start")).toEqual("22");
    expect(eventInfoWrapper.getAttribute("end")).toEqual("23");
  });

  it("THEN should have a class name for short event", () => {
    expect(eventTimeParagraph).toHaveClass("short-event");
  });
});
