import { EventWrapper, Date, EventInfo } from "./Event.styles";

interface EventProps {
  [index: string]: string;
}

const Event = ({ name, location, start, end, backgroundColor }: EventProps) => {
  return (
    <>
      <Date>{`${start}-${end}`}</Date>
      <EventInfo backgroundColor={backgroundColor}>
        {name}<br/>{location}
      </EventInfo>
    </>
  );
};

export default Event;
