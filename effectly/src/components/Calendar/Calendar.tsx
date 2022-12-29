import { useState } from "react";
import { addDays } from "date-fns";
import useCalendarData from "../../hooks/Calendar/useCalendarData";
import { CalendarWrapper } from "./Calendar.styles";
import DatePicker from "./DatePicker/DatePicker";

type CalendarProps = {
  className: string;
  userId: string;
};

const Calendar = ({ className, userId }: CalendarProps) => {
  const { calData: calendarData } = useCalendarData(userId);
  const [calendarDay, setCalendarDay] = useState(new Date(Date.now()));

  const incrementDay = () => setCalendarDay(addDays(calendarDay, 1));
  const decrementDay = () => setCalendarDay(addDays(calendarDay, -1));

  const {
    event_name: eventName,
    event_location: eventLocation,
    event_start: eventStart,
    event_end: eventEnd,
  } = calendarData || {};

  return (
    <CalendarWrapper className={className}>
      {!calendarData ? (
        "Loading..."
      ) : (
        <>
          <DatePicker
            day={calendarDay}
            incrementDay={incrementDay}
            decrementDay={decrementDay}
          />
        </>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
