import { CalendarWrapper, EventsRows } from "./Calendar.styles";
import DatePicker from "./DatePicker/DatePicker";
import Event from "./Event/Event";
import useCalendarData from "../../hooks/Calendar/useCalendarData";
import useDatePick from "../../hooks/Calendar/useDatePick";
import { filterEvents, convertDate } from "./helpers/filterEvents";
import getRandomColor from "./helpers/getRandomColor";
import GlobalStyle from "../../core/style/globalStyle";

type CalendarProps = {
  className: string;
  userId: string;
};

const Calendar = ({ className, userId }: CalendarProps) => {
  const { calData: calendarData } = useCalendarData(userId);
  const { calendarDay: visibleDay, incrementDay, decrementDay } = useDatePick();

  const { filteredEvents } = filterEvents(calendarData, visibleDay);

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
          <GlobalStyle />
          <EventsRows>
            {filteredEvents.map((event) => {
              const {
                event_start: start,
                event_end: end,
                event_name: name,
                event_location: location,
              } = event;

              return (
                <Event
                  name={name}
                  start={convertDate(start)}
                  end={convertDate(end)}
                  location={location}
                  backgroundColor={getRandomColor()}
                />
              );
            })}
          </EventsRows>
        </>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
