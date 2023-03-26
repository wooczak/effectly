import { Arrow, DatePickerWrapper } from "./DatePicker.styles";

import ArrowLeftIcon from "../../../assets/icons/ArrowLeft.svg";
import ArrowRightIcon from "../../../assets/icons/ArrowRight.svg";
import { Calendar } from "../../../core/variables/variables";

interface DatePickerTypes {
  dayString: string;
  isToday: boolean;
  weekDay: string;
  incrementDay: () => void;
  decrementDay: () => void;
}

const DatePicker = ({
  isToday,
  dayString,
  weekDay,
  incrementDay,
  decrementDay,
}: DatePickerTypes) => {
  return (
    <DatePickerWrapper data-testid="date-picker-wrapper">
      <Arrow
        onClick={decrementDay}
        src={ArrowLeftIcon}
        data-testid="decrement-day-arrow"
      />
      {`${isToday ? Calendar.TODAY : ""}
      ${`${weekDay}, ${dayString}`}`}
      <Arrow
        onClick={incrementDay}
        src={ArrowRightIcon}
        data-testid="increment-day-arrow"
      />
    </DatePickerWrapper>
  );
};

export default DatePicker;
