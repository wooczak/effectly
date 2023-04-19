import useNewEvent from "../../../hooks/Calendar/useNewEvent/useNewEvent";

import { Calendar } from "../../../core/variables/variables";
import { Modal, Form, Label, Input, SubmitBtn } from "./AddNewEvents.styles";

type PropTypes = {
  isOpened: boolean;
};

const AddNewEvent = ({ isOpened }: PropTypes) => {
  const { handleClose, handleSubmit, eventName } = useNewEvent();

  return (
    <Modal isOpened={isOpened}>
      <Form onSubmit={handleSubmit}>
        <Label htmlFor="event-name">{Calendar.EVENT_NAME_LABEL}</Label>
        <Input type="text" id="event-name" name="event-name" ref={eventName} />
        <SubmitBtn type="submit" />
      </Form>
      <button onClick={handleClose}>Close me</button>
    </Modal>
  );
};

export default AddNewEvent;
