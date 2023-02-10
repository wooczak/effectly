import { isToday } from "date-fns";
import { Arrow, DatePickerWrapper } from "./DatePicker.styles";
import ArrowLeftIcon from "../../../assets/icons/ArrowLeft.svg";
import ArrowRightIcon from "../../../assets/icons/ArrowRight.svg";

interface DatePickerTypes {
  day: Date;
  weekDay: String;
  incrementDay: () => void;
  decrementDay: () => void;
}

const DatePicker = ({
  day,
  weekDay,
  incrementDay,
  decrementDay,
}: DatePickerTypes) => {
  const dayString = day?.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  return (
    <DatePickerWrapper data-testid="date-picker-wrapper">
      <Arrow
        onClick={decrementDay}
        src={ArrowLeftIcon}
        data-testid="decrement-day-arrow"
      />
      {`${isToday(day) ? "Today, " : ""}${`${weekDay}, `}${dayString}`}
      <Arrow
        onClick={incrementDay}
        src={ArrowRightIcon}
        data-testid="increment-day-arrow"
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
