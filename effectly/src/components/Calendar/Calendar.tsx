import useCalendarData from "../../hooks/Calendar/useCalendarData";
import { CalendarWrapper } from "./Calendar.styles";
import DatePicker from "./DatePicker/DatePicker";

type CalendarProps = {
  className: string;
  userId: string;
};

const Calendar = ({ className, userId }: CalendarProps) => {
  const { calData: calendarData } = useCalendarData(userId);

  const {
    event_name: eventName,
    event_location: eventLocation,
    event_start: eventStart,
    event_end: eventEnd,
  } = calendarData || {};

  return (
    <CalendarWrapper className={className}>
      {!userId ? (
        "Loading..."
      ) : (
        <>
          <DatePicker />
        </>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
