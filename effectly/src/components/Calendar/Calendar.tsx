import {
  CalendarWrapper,
  EventsWrapper,
  NoEventsInfo,
  CalendarHeader,
  AddNewEventBtn,
} from "./Calendar.styles";

import useCalendarData from "../../hooks/Calendar/useCalendarData";
import useDatePick from "../../hooks/Calendar/useDatePick";
import { filterEvents } from "./helpers/events";

import DatePicker from "./DatePicker/DatePicker";
import Events from "./Events/Events";
import TimeColumn from "./TimeColumn/TimeColumn";
import {
  Calendar as CalendarVars,
  Globals,
} from "../../core/variables/variables";

type CalendarProps = {
  className: string;
  userId: string;
  children?: React.ReactNode;
};

const Calendar = ({ className, userId }: CalendarProps) => {
  const { calData: calendarData } = useCalendarData(userId);
  const {
    calendarDay: visibleDay,
    weekDayString: weekDay,
    incrementDay,
    decrementDay,
  } = useDatePick();

  const { sortedAndFilteredEvents: events } = filterEvents(
    calendarData,
    visibleDay
  );

  const eventsFetched = events && events.length !== 0;

  return (
    <CalendarWrapper className={className}>
      {!calendarData ? (
        Globals.LOADING
      ) : (
        <>
          <CalendarHeader>
            <DatePicker
              day={visibleDay}
              weekDay={weekDay}
              incrementDay={incrementDay}
              decrementDay={decrementDay}
            />
            <AddNewEventBtn>Add new event</AddNewEventBtn>
          </CalendarHeader>

          {!eventsFetched ? (
            <NoEventsInfo>
              <p>{CalendarVars.NO_EVENTS_ADDED}</p>
            </NoEventsInfo>
          ) : (
            <EventsWrapper>
              <TimeColumn />
              <Events events={events} visibleDay={visibleDay} />
            </EventsWrapper>
          )}
        </>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
