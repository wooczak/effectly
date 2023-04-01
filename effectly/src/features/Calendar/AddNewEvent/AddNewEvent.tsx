import { useDispatch } from "react-redux";
import { toggleAddNewEventModal } from "../../../store/calendar/calendarSlice";
import { Modal } from "./AddNewEvents.styles";

type PropTypes = {
  isOpened: boolean;
};

const AddNewEvent = ({ isOpened }: PropTypes) => {
  const updateStore = useDispatch();

  const handleClose = () => updateStore(toggleAddNewEventModal());

  return (
    <Modal isOpened={isOpened}>
      <p>Hello</p>
      <button onClick={handleClose}>Close me</button>
    </Modal>
  );
};

export default AddNewEvent;
