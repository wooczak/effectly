import { useDispatch, useSelector } from "react-redux";
import { isToday } from "date-fns";
import useCalendarData from "../../hooks/Calendar/useCalendarData";
import useEventsFilter from "../../hooks/Calendar/useEventsFilter";
import useDatePick from "../../hooks/Calendar/useDatePick";

import DatePicker from "./DatePicker/DatePicker";
import Events from "./Events/Events";
import TimeColumn from "./TimeColumn/TimeColumn";
import AddNewEventModal from "../../features/Calendar/AddNewEvent/AddNewEvent";

import { areEventsFetched, returnToLocaleDateString } from "./helpers/events";
import {
  Calendar as CalendarVars,
  Globals,
} from "../../core/variables/variables";
import { toggleAddNewEventModal } from "../../store/calendar/calendarSlice";

import {
  CalendarWrapper,
  EventsWrapper,
  NoEventsInfo,
  CalendarHeader,
  AddNewEventBtn,
} from "./Calendar.styles";
import { GlobalStore } from "../../store/storeTypes";

type CalendarProps = {
  className: string;
  userId: string;
  children?: React.ReactNode;
};

const Calendar = ({ className, userId }: CalendarProps) => {
  const { isAddNewEventModalOpened: isModalOpened } = useSelector(
    (state: GlobalStore) => state.calendar
  );
  const updateStore = useDispatch();
  const { calData: calendarData } = useCalendarData(userId);
  const {
    calendarDay: visibleDay,
    weekDayString: weekDay,
    incrementDay,
    decrementDay,
  } = useDatePick();
  const { sortedAndFilteredEvents: events } = useEventsFilter(
    calendarData,
    visibleDay
  );

  const dayString = returnToLocaleDateString(visibleDay);

  const handleAddNewEventBtnClick = () => updateStore(toggleAddNewEventModal());

  return (
    <CalendarWrapper className={className}>
      <AddNewEventModal isOpened={isModalOpened}/>

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
              Add new event
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
