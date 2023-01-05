import { EventWrapper, Date, EventInfo } from "./Event.styles";

interface EventProps {
  [index: string]: string;
}

const Event = ({ name, location, start, end, backgroundColor }: EventProps) => {
  return (
    <>
      <EventWrapper>
        <Date>{`${start}-${end}`}</Date>
        <EventInfo backgroundColor={backgroundColor}>
          <p className="event-name">{name}</p>
          <p className="event-location">{location}</p>
        </EventInfo>
      </EventWrapper>
    </>
  );
};

export default Event;
