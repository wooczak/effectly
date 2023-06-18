import TimePicker from "react-time-picker";
import DatePicker from "react-date-picker";

import useNewEvent from "../../../hooks/Calendar/useNewEvent/useNewEvent";

import { Calendar } from "../../../core/variables";
import {
  Modal,
  Form,
  Label,
  Input,
  SubmitBtn,
  Close,
  FlexBlock,
  Wrapper,
} from "./AddNewEvent.styles";
import AddCategory from "./AddCategory";

type PropTypes = {
  isOpened: boolean;
};

const AddNewEvent = ({ isOpened }: PropTypes) => {
  const {
    handleClose,
    handleSubmit,
    Props: { Label: LabelProps, Input: InputProps },
    isAllDay: isAllDayClicked,
  } = useNewEvent();

  return (
    <Modal isOpened={isOpened}>
      <Wrapper>
        <Close onClick={handleClose}>X</Close>
        <Form onSubmit={handleSubmit}>
          <Label {...LabelProps.EventName}>{Calendar.EVENT_NAME_LABEL}</Label>
          <Input {...InputProps.EventName} />

          <FlexBlock>
            <Label {...LabelProps.AllDay}>{Calendar.ALL_DAY_LABEL}</Label>
            <Input {...InputProps.AllDay} />
          </FlexBlock>

          <Label {...LabelProps.StartTime}>{Calendar.START_TIME_LABEL}</Label>
          <FlexBlock>
            {!isAllDayClicked && <TimePicker {...InputProps.StartTime} />}
            <DatePicker {...InputProps.StartDate} />
          </FlexBlock>

          <Label {...LabelProps.EndTime}>{Calendar.END_TIME_LABEL}</Label>
          <FlexBlock>
            {!isAllDayClicked && <TimePicker {...InputProps.EndTime} />}
            <DatePicker {...InputProps.EndDate} />
          </FlexBlock>

          <AddCategory />
          <SubmitBtn type="submit">{Calendar.DONE}</SubmitBtn>
        </Form>
      </Wrapper>
    </Modal>
  );
};

export default AddNewEvent;
