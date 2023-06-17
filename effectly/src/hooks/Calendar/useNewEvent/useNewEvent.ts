import { FormEvent, useReducer, useRef } from "react";
import { useDispatch } from "react-redux";

import useProperInputs from "../useProperInputs";
import useCurrentUser from "../../global/useCurrentUser";

import eventDetailsReducer, { initialState } from "./eventDetailsReducer";
import {
  toggleAddNewEventModal,
  toggleAddNewEventModal as toggleModal,
} from "../../../store/calendar/calendarSlice";
import { EventDetailsReducerActions as Actions } from "../../../core/variables";
import { formatToDate, returnFormProps } from "./helpers";
import { pushCalendarEventToDB } from "../../../core/firebase/posts";

const useNewEvent = () => {
  const currentUser = useCurrentUser();
  const updateStore = useDispatch();
  const eventTimeStartRef = useRef<string>();
  const eventTimeEndRef = useRef<string>();
  const eventDateStartRef = useRef<string>();
  const eventDateEndRef = useRef<string>();
  const [eventDetails, updateDetails] = useReducer(
    eventDetailsReducer,
    initialState
  );
  const { eventName, isAllDay } = eventDetails;
  useProperInputs(isAllDay);

  const handleClose = () => updateStore(toggleModal());
  const handleAddNewEventBtnClick = () => updateStore(toggleAddNewEventModal());
  const handleEventNameInput = (eventName: string) =>
    updateDetails({ type: Actions.SET_EVENT_NAME, payload: eventName });
  const handleAllDayClick = () =>
    updateDetails({ type: Actions.TOGGLE_IS_ALL_DAY });
  const handleCategoryClick = (category: string) =>
    updateDetails({ type: Actions.SET_CATEGORY, payload: category });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    pushCalendarEventToDB(currentUser?.uid, {
      event_name: eventName,
      event_start: formatToDate(
        (eventTimeStartRef as React.MutableRefObject<string>).current,
        (eventDateStartRef as React.MutableRefObject<string>)!.current
      ),
      event_end: formatToDate(
        (eventTimeEndRef as React.MutableRefObject<string>).current,
        (eventDateEndRef as React.MutableRefObject<string>).current
      ),
    });

    handleClose();
  };

  const Props = returnFormProps({
    handleAllDayClick,
    handleEventNameInput,
    eventTimeStartRef,
    eventTimeEndRef,
    eventDateStartRef,
    eventDateEndRef,
  });

  return {
    handleClose,
    handleSubmit,
    handleCategoryClick,
    handleAddNewEventBtnClick,
    Props,
    isAllDay,
  };
};

export default useNewEvent;
