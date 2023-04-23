import React from "react";
import { useSelector } from "react-redux";
import { isToday } from "date-fns";

import useCalendarData from "../../hooks/Calendar/useCalendarData";
import useEventsFilter from "../../hooks/Calendar/useEventsFilter";
import useDatePick from "../../hooks/Calendar/useDatePick/useDatePick";
import useNewEvent from "../../hooks/Calendar/useNewEvent/useNewEvent";

import DatePicker from "./DatePicker/DatePicker";
import Events from "./Events/Events";
import TimeColumn from "./TimeColumn/TimeColumn";
import AddNewEventModal from "../../features/Calendar/AddNewEvent/AddNewEvent";

import { areEventsFetched } from "./helpers/events";
import {
  Calendar as CalendarVars,
  Globals,
} from "../../core/variables/variables";
import { GlobalStore } from "../../store/storeTypes";

import {
  CalendarWrapper,
  EventsWrapper,
  NoEventsInfo,
  CalendarHeader,
  AddNewEventBtn,
} from "./Calendar.styles";

type CalendarProps = {
  className: string;
  userId: string;
  children?: React.ReactNode;
};

const Calendar = ({ className, userId }: CalendarProps) => {
  const { calData: calendarData } = useCalendarData(userId);
  const { handleAddNewEventBtnClick } = useNewEvent();

  const {
    calendarDay: visibleDay,
    dayString,
    weekDayString: weekDay,
    incrementDay,
    decrementDay,
  } = useDatePick();

  const { sortedAndFilteredEvents: events } = useEventsFilter(
    calendarData,
    visibleDay
  );

  const { isAddNewEventModalOpened: isModalOpened } = useSelector(
    (state: GlobalStore) => state.calendar
  );

  return (
    <CalendarWrapper className={className}>
      <AddNewEventModal isOpened={isModalOpened} />

      {!calendarData ? (
        Globals.LOADING
      ) : (
        <>
          <CalendarHeader>
            <DatePicker
              isToday={isToday(visibleDay)}
              dayString={dayString}
              weekDay={weekDay}
              incrementDay={incrementDay}
              decrementDay={decrementDay}
            />
            <AddNewEventBtn onClick={handleAddNewEventBtnClick}>
              {CalendarVars.ADD_NEW_EVENT}
            </AddNewEventBtn>
          </CalendarHeader>

          {!areEventsFetched(events) ? (
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
