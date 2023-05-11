import { FormEvent, useReducer, useRef } from "react";
import { useDispatch } from "react-redux";
import useProperInputs from "../useProperInputs";

import eventDetailsReducer, { initialState } from "./eventDetailsReducer";
import {
  addNewEvent,
  toggleAddNewEventModal,
  toggleAddNewEventModal as toggleModal,
} from "../../../store/calendar/calendarSlice";
import {
  EventDetailsReducerActions as Actions,
} from "../../../core/variables";

const useNewEvent = () => {
  const updateStore = useDispatch();
  const eventNameRef = useRef<HTMLInputElement>(null);
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
  const name = eventNameRef.current?.value;
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
        name,
        startDate,
        endDate,
        isAllDay,
        category,
      })
    );

    handleClose();
  };

  const Props = {
    Label: {
      EventName: {
        htmlFor: "event-name",
      },
      AllDay: {
        htmlFor: "all-day",
        onClick: handleAllDayClick,
        id: "all-day-label"
      },
      StartTime: {
        htmlFor: "start-time",
      },
      EndTime: {
        htmlFor: "end-time",
      },
    },
    Input: {
      EventName: {
        type: "text",
        id: "event-name",
        name: "event-name",
        ref: eventNameRef,
      },
      AllDay: {
        type: "checkbox",
        id: "all-day",
        name: "all-day",
        onClick: handleAllDayClick,
      },
      StartTime: {
        type: "time",
        id: "start-time",
        name: "start-time",
      },
      StartDate: {
        type: "date",
        id: "start-date",
        name: "start-date",
      },
      EndTime: {
        type: "time",
        id: "end-time",
        name: "end-time",
      },
      EndDate: {
        type: "date",
        id: "end-date",
        name: "end-date",
      },
    },
  };

  return {
    handleClose,
    handleSubmit,
    handleCategoryClick,
    handleAddNewEventBtnClick,
    Props,
    isAllDay
  };
};

export default useNewEvent;
