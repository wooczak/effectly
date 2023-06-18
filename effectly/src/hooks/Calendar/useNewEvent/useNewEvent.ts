import { FormEvent, useReducer } from "react";
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

import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";

const useNewEvent = () => {
  const currentUser = useCurrentUser();
  const updateStore = useDispatch();
  const [eventDetails, updateDetails] = useReducer(
    eventDetailsReducer,
    initialState
  );

  const {
    eventName,
    isAllDay,
    eventTimeStart,
    eventTimeEnd,
    eventDateStart,
    eventDateEnd,
  } = eventDetails;

  const handleAction = (type: Actions, payload?: any) => updateDetails({ type, payload }); 

  const handleClose = () => updateStore(toggleModal());
  const handleAddNewEventBtnClick = () => updateStore(toggleAddNewEventModal());
  const handleEventNameInput = handleAction(Actions.SET_EVENT_NAME, eventName as string);
  const handleAllDayClick = handleAction(Actions.TOGGLE_IS_ALL_DAY);
  const handleCategoryClick = (category: string) =>
    updateDetails({ type: Actions.SET_CATEGORY, payload: category });
  const handleEventTimeStartInput = (eventTimeStart: Date) =>
    updateDetails({
      type: Actions.SET_EVENT_TIME_START,
      payload: eventTimeStart,
    });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    /*     pushCalendarEventToDB(currentUser?.uid, {
      event_name: eventName,
    }); */

    handleClose();
  };

  const Props = returnFormProps({
    handleAllDayClick,
    handleEventNameInput,
    eventTimeStart,
    eventTimeEnd,
    eventDateStart,
    eventDateEnd,
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
