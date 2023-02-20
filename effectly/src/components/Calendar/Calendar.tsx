import { CalendarWrapper, EventsRows, NoEventsInfo } from "./Calendar.styles";

import DatePicker from "./DatePicker/DatePicker";
import Event from "./Event/Event";

import useCalendarData from "../../hooks/Calendar/useCalendarData";
import useDatePick from "../../hooks/Calendar/useDatePick";

import { Calendar as CalendarVars } from "../../core/variables/variables";
import { convertDate, filterEvents, getEventsMath } from "./helpers/events";
import getRandomColor from "./helpers/getRandomColor";
import { Globals } from "../../core/variables/variables";

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

  const eventsFetched = events.length !== 0;

  return (
    <CalendarWrapper className={className}>
      {!calendarData ? (
        Globals.LOADING
      ) : (
        <>
          <DatePicker
            day={visibleDay}
            weekDay={weekDay}
            incrementDay={incrementDay}
            decrementDay={decrementDay}
          />
          {!eventsFetched ? (
            <NoEventsInfo>
              <p>{CalendarVars.NO_EVENTS_ADDED}</p>
            </NoEventsInfo>
          ) : (
            <EventsRows>
              {events.map((event, index) => {
                const {
                  event_start: start,
                  event_end: end,
                  event_name: name,
                  event_location: location,
                } = event;

                const {
                  intervalInMinutes: fromMidnight,
                  durationInMinutes: duration,
                } = getEventsMath(visibleDay, start, end);

                return (
                  <Event
                    index={index}
                    name={name}
                    start={convertDate(start)}
                    end={convertDate(end)}
                    location={location}
                    fromMidnight={fromMidnight}
                    duration={duration}
                    backgroundColor={getRandomColor()}
                  />
                );
              })}
            </EventsRows>
          )}
        </>
      )}
    </CalendarWrapper>
  );
};

export default Calendar;
