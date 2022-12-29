import { isToday } from "date-fns";
import { Arrow, DatePickerWrapper } from "./DatePicker.styles";
import ArrowLeftIcon from "../../../assets/icons/ArrowLeft.svg";
import ArrowRightIcon from "../../../assets/icons/ArrowRight.svg";

interface DatePickerTypes {
  day: Date;
  incrementDay: () => void;
  decrementDay: () => void;
}

const DatePicker = ({ day, incrementDay, decrementDay }: DatePickerTypes) => {
  const dayString = day.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  return (
    <DatePickerWrapper>
      <Arrow onClick={decrementDay} src={ArrowLeftIcon} />
      {`${isToday(day) ? 'Today, ' : ''}${dayString}`}
      <Arrow onClick={incrementDay} src={ArrowRightIcon} />
    </DatePickerWrapper>
  );
};

export default DatePicker;
