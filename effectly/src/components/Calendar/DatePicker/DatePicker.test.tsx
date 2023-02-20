import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import useDatePick from "../../../hooks/Calendar/useDatePick";
import Calendar from "../Calendar";
import DatePicker from "./DatePicker";

type DataType = {
  day: Date;
  weekDay: string;
};

vi.mock("../../../hooks/Calendar/useDatePick", () => ({
  default: () => ({ incrementDay: vi.fn(), decrementDay: vi.fn() }),
}));

vi.mock("date-fns", () => ({
  isToday: vi.fn(),
}));

const mockDataNotToday: DataType = {
  day: new Date("January 20, 2023"),
  weekDay: "Friday",
};

const mockDataToday: DataType = {
  day: new Date(Date.now()),
  weekDay: "Tuesday",
};

const renderDatePicker = (data: DataType) => {
  const { incrementDay, decrementDay } = useDatePick();

  const day = data?.day;
  const weekDay = data?.weekDay;

  render(
    <Calendar className="calendar" userId="test">
      <DatePicker
        day={day}
        weekDay={weekDay}
        incrementDay={incrementDay}
        decrementDay={decrementDay}
      />
    </Calendar>
  );
};

describe("WHEN the date picker is rendered", () => {
  describe("AND the passed date is not equal to today", () => {
    it("THEN should not add <Today> string to the UI", () => {
      renderDatePicker(mockDataNotToday);
      const wrapper = screen.getByTestId("date-picker-wrapper");

      expect(wrapper).toBe("hello");
    });
  });

  describe("AND the passed date is equal to today", () => {
    it("THEN should add <Today> string to the UI", () => {
      renderDatePicker(mockDataToday);
      const wrapper = screen.getByTestId("date-picker-wrapper");

      expect(wrapper).toBe("hello");
    });
  });
});
