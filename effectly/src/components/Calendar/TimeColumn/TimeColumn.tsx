import { HourStamp, TimeColumnWrapper } from "./TimeColumn.styles";
import { timeData } from "./timeData";

const TimeColumn = () => {
  return (
    <TimeColumnWrapper>
      {timeData.map((hourStamp) => (
        <HourStamp>{hourStamp}</HourStamp>
      ))}
    </TimeColumnWrapper>
  );
};

export default TimeColumn;
