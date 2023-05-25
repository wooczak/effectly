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
import { returnFormProps } from "./helpers";
import { pushCalendarEventToDB } from "../../../core/firebase/posts";

const useNewEvent = () => {
  const currentUser = useCurrentUser();
  const updateStore = useDispatch();
  const [eventDetails, updateDetails] = useReducer(
    eventDetailsReducer,
    initialState
  );
  const {
    eventName,
    eventStart: startDate,
    eventEnd: endDate,
    isAllDay,
  } = eventDetails;
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
      event_start: startDate,
      event_end: endDate,
    });

    handleClose();
  };

  const Props = returnFormProps({
    handleAllDayClick,
    handleEventNameInput,
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
