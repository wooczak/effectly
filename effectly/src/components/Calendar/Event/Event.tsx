import React from "react";
import { EventWrapper, Date, EventInfo } from "./Event.styles";

interface EventProps {
  index: any;
  name: string;
  location: string;
  start: string;
  end: string;
  backgroundColor: string;
  fromMidnight: number;
  duration: number;
}

const Event = ({
  index,
  name,
  location,
  start,
  end,
  fromMidnight,
  duration,
  backgroundColor,
}: EventProps) => {



  return (
    <React.Fragment key={index}>
      <EventWrapper fromMidnight={`${fromMidnight / 5}px`}>
        <Date>{`${start} - ${end}`}</Date>
        <EventInfo backgroundColor={backgroundColor}>
          <p className="event-name">{name}</p>
          <p className="event-location">{location}</p>
        </EventInfo>
      </EventWrapper>
    </React.Fragment>
  );
};

export default Event;
