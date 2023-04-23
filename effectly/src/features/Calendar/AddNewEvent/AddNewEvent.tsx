import React from "react";
import useNewEvent from "../../../hooks/Calendar/useNewEvent/useNewEvent";

import { Calendar } from "../../../core/variables/variables";
import {
  Modal,
  Form,
  Label,
  Input,
  SubmitBtn,
  Close,
} from "./AddNewEvent.styles";

type PropTypes = {
  isOpened: boolean;
};

const AddNewEvent = ({ isOpened }: PropTypes) => {
  const {
    handleClose,
    handleSubmit,
    handleAllDayClick,
    // handleCategoryClick,
    Props,
  } = useNewEvent();

  return (
    <Modal isOpened={isOpened}>
      <Close onClick={() => handleClose}>X</Close>
      <Form onSubmit={handleSubmit}>
        <Label {...Props.Label.EventName}>{Calendar.EVENT_NAME_LABEL}</Label>
        <Input {...Props.Input.EventName} />

        <Label {...Props.Label.AllDay}>{Calendar.ALL_DAY_LABEL}</Label>
        <Input {...Props.Input.AllDay} />

        <Label {...Props.Label.StartTime}>{Calendar.START_TIME_LABEL}</Label>
        <Input {...Props.Input.StartTime} />
        <Input {...Props.Input.StartDate} />

        <Label {...Props.Label.EndTime}>{Calendar.END_TIME_LABEL}</Label>
        <Input {...Props.Input.EndTime} />
        <Input {...Props.Input.EndDate} />

        <SubmitBtn type="submit">{Calendar.DONE}</SubmitBtn>
      </Form>
    </Modal>
  );
};

export default AddNewEvent;
