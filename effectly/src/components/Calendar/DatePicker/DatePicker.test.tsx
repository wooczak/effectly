import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";

import useDatePick from "../../../hooks/Calendar/useDatePick";
import DatePicker from "./DatePicker";

type DataType = {
  dayString: string;
  isToday: boolean;
  weekDay: string;
};

let wrapperTextContent: string;

vi.mock("../../../hooks/Calendar/useDatePick", () => ({
  default: () => ({ incrementDay: vi.fn(), decrementDay: vi.fn() }),
}));

const mockDataToday: DataType = {
  dayString: "Feb 26",
  isToday: true,
  weekDay: "Friday",
};

const mockDataNotToday: DataType = {
  dayString: "Feb 27",
  isToday: false,
  weekDay: "Tuesday",
};

const renderDatePicker = (data: DataType) => {
  const { incrementDay, decrementDay } = useDatePick();

  const weekDay = data?.weekDay;
  const isToday = data?.isToday;
  const dayString = data?.dayString;

  render(
    <DatePicker
      dayString={dayString}
      isToday={isToday}
      weekDay={weekDay}
      incrementDay={incrementDay}
      decrementDay={decrementDay}
    />
  );
};

describe("WHEN the date picker is rendered", () => {
  describe("AND the passed date is not equal to today", () => {
    it("THEN should not add <Today> string to the UI", () => {
      renderDatePicker(mockDataNotToday);
      expect(screen.getByText("Tuesday, Feb 27")).toBeVisible();
    });
  });

  describe("AND the passed date is equal to today", () => {
    it("THEN should add <Today> string to the UI", () => {
      renderDatePicker(mockDataToday);
      expect(screen.getByText("Today, Friday, Feb 26")).toBeVisible();
    });
  });
});
