import { useDispatch } from "react-redux";
import { toggleAddNewEventModal } from "../../../store/calendar/calendarSlice";
import { Modal, Form, Label, Input } from "./AddNewEvents.styles";

type PropTypes = {
  isOpened: boolean;
};

const AddNewEvent = ({ isOpened }: PropTypes) => {
  const updateStore = useDispatch();

  const handleClose = () => updateStore(toggleAddNewEventModal());

  return (
    <Modal isOpened={isOpened}>
      <Form>
        <Label htmlFor="event-name">Event:</Label>
        <Input type="text" id="event-name" name="event-name" />
      </Form>
      <button onClick={handleClose}>Close me</button>
    </Modal>
  );
};

export default AddNewEvent;
