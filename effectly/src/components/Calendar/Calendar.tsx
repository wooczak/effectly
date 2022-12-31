import { useEffect } from "react";
import useCalendarData from "../../hooks/Calendar/useCalendarData";
import { CalendarWrapper } from "./Calendar.styles";
import DatePicker from "./DatePicker/DatePicker";
import useDatePick from "../../hooks/Calendar/useDatePick";
import useFilteredEvents from "../../hooks/Calendar/useFilteredEvents";

type CalendarProps = {
  className: string;
  userId: string;
};

const Calendar = ({ className, userId }: CalendarProps) => {
  const { calData: calendarData } = useCalendarData(userId);
  const { calendarDay: visibleDay, incrementDay, decrementDay } = useDatePick();
  const { filteredEvents } = useFilteredEvents(calendarData, visibleDay);

  return (
    <CalendarWrapper className={className}>
      {!calendarData ? (
        "Loading..."
      ) : (
        <>
          <DatePicker
            day={visibleDay}
            incrementDay={incrementDay}
            decrementDay={decrementDay}
          />
          {filteredEvents.map(event => <div>{event.event_name}</div>)}
        </>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
