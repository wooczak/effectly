import React from "react";
import { getEventsMath } from "../helpers/events";
import getRandomColor from "../helpers/getRandomColor";
import { EventWrapper, Date, EventInfo } from "./Event.styles";

interface EventProps {
  name: string;
  location: string;
  start: string;
  end: string;
  backgroundColor: string;
  fromMidnight: number;
  duration: number;
}

const Events = (data: any[], visibleDay: Date) => {
  <React.Fragment>
    {data.map((event, index) => {
      const {
        event_start: start,
        event_end: end,
        event_name: name,
        event_location: location,
      } = event;

      const { intervalInMinutes: fromMidnight, durationInMinutes: duration } =
        getEventsMath(visibleDay, start, end);

      return (
        <EventWrapper fromMidnight={`${fromMidnight / 5}px`} key={index}>
          <Date>{`${start} - ${end}`}</Date>
          <EventInfo
            backgroundColor={getRandomColor()}
            duration={`${duration / 7.5}px`}
          >
            <p className="event-name">{name}</p>
            <p className="event-location">{location}</p>
          </EventInfo>
        </EventWrapper>
      );
    })}
  </React.Fragment>;
};

export default Events;
