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
} from "./AddNewEvent.styles";

type PropTypes = {
  isOpened: boolean;
};

const AddNewEvent = ({ isOpened }: PropTypes) => {
  const {
    handleClose,
    handleSubmit,
    // handleCategoryClick,
    Props: { Label: LabelProps, Input: InputProps },
    isAllDay: isAllDayClicked,
  } = useNewEvent();

  return (
    <Modal isOpened={isOpened}>
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
          {!isAllDayClicked && <Input {...InputProps.StartTime} />}
          <Input {...InputProps.StartDate} />
        </FlexBlock>

        <Label {...LabelProps.EndTime}>{Calendar.END_TIME_LABEL}</Label>
        <FlexBlock>
          {!isAllDayClicked && <Input {...InputProps.EndTime} />}
          <Input {...InputProps.EndDate} />
        </FlexBlock>

        <SubmitBtn type="submit">{Calendar.DONE}</SubmitBtn>
      </Form>
    </Modal>
  );
};

export default AddNewEvent;
