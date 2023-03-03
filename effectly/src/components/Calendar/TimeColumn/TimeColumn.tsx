import { HourStamp } from "./TimeColumn.styles";
import { timeData } from "./timeData";

const TimeColumn = () => {
  return (
    <>
      {timeData.map((hourStamp, index) => (
        <HourStamp gridRow={index + 1}>{hourStamp}</HourStamp>
      ))}
    </>
  );
};

export default TimeColumn;
