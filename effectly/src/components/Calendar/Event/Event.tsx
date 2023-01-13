import React from "react";
import { EventWrapper, Date, EventInfo } from "./Event.styles";

interface EventProps {
  index: any;
  name: string;
  location: string;
  start: string;
  end: string;
  backgroundColor: string;
}

const Event = ({
  index,
  name,
  location,
  start,
  end,
  backgroundColor,
}: EventProps) => {
  return (
    <React.Fragment key={index}>
      <EventWrapper>
        <Date>{`${start}-${end}`}</Date>
        <EventInfo backgroundColor={backgroundColor}>
          <p className="event-name">{name}</p>
          <p className="event-location">{location}</p>
        </EventInfo>
      </EventWrapper>
    </React.Fragment>
  );
};

export default Event;
