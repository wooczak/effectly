import { FormEvent, useReducer, useState } from "react";
import { useDispatch } from "react-redux";
import useProperInputs from "../useProperInputs";

import eventDetailsReducer, { initialState } from "./eventDetailsReducer";
import {
  addNewEvent,
  toggleAddNewEventModal,
  toggleAddNewEventModal as toggleModal,
} from "../../../store/calendar/calendarSlice";
import { EventDetailsReducerActions as Actions } from "../../../core/variables";
import { returnFormProps } from "./helpers";

const useNewEvent = () => {
  const updateStore = useDispatch();
  const [eventName, setEventName] = useState("");
  const [eventDetails, updateDetails] = useReducer(
    eventDetailsReducer,
    initialState
  );
  const {
    eventStart: startDate,
    eventEnd: endDate,
    isAllDay,
    category,
  } = eventDetails;
  useProperInputs(isAllDay);

  const handleClose = () => updateStore(toggleModal());
  const handleAddNewEventBtnClick = () => updateStore(toggleAddNewEventModal());
  const handleAllDayClick = () =>
    updateDetails({ type: Actions.TOGGLE_IS_ALL_DAY });
  const handleCategoryClick = (category: string) =>
    updateDetails({ type: Actions.SET_CATEGORY, payload: category });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    updateStore(
      addNewEvent({
        eventName,
        startDate,
        endDate,
        isAllDay,
        category,
      })
    );

    handleClose();
  };

  const Props = returnFormProps({
    handleAllDayClick,
    setEventName
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
