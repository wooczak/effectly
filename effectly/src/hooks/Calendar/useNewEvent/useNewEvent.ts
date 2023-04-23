import { FormEvent, useReducer, useRef } from "react";
import { useDispatch } from "react-redux";

import eventDetailsReducer, { initialState } from "./eventDetailsReducer";
import {
  addNewEvent,
  toggleAddNewEventModal,
  toggleAddNewEventModal as toggleModal,
} from "../../../store/calendar/calendarSlice";
import { EventDetailsReducerActions as Actions } from "../../../core/variables/variables";

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
  };

  const Props = {
    Label: {
      EventName: {
        htmlFor: "event-name",
      },
      AllDay: {
        htmlFor: "all-day",
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
    eventNameRef,
    handleAllDayClick,
    handleCategoryClick,
    handleAddNewEventBtnClick,
    Props,
  };
};

export default useNewEvent;
