import { FormEvent, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import {
  addNewEvent,
  toggleAddNewEventModal as toggleModal,
} from "../../../store/calendar/calendarSlice";

const useNewEvent = () => {
  const updateStore = useDispatch();

  const [isAllDay, setIsAllDay] = useState(false);
  const [category, setCategory] = useState("");

  const eventName = useRef<HTMLInputElement>(null);
  const eventStartDate = useRef<HTMLInputElement>(null);
  const eventEndDate = useRef<HTMLInputElement>(null);

  const handleClose = () => updateStore(toggleModal());
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateStore(
      addNewEvent({
        name: eventName!.current?.value,
        startDate: eventStartDate!.current?.value,
        endDate: eventEndDate!.current?.value,
        isAllDay,
        category,
      })
    );
  };

  return { handleClose, handleSubmit, eventName, setIsAllDay, setCategory };
};

export default useNewEvent;
