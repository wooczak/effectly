import React from "react";
import { convertDate, getEventsMath } from "../helpers/events";
import getRandomColor from "../helpers/getRandomColor";
import { EventWrapper, EventInfo } from "./Events.styles";

type PropTypes = {
  events: any;
  visibleDay: Date;
};

type eventElemsTypes = {
  event_start: {
    seconds: number;
  };
  event_end: {
    seconds: number;
  };
  event_name: string;
  event_location: string;
};

const Events = ({ events, visibleDay }: PropTypes) => {
  return (
    <React.Fragment>
      {events.map((event: eventElemsTypes, index: React.Key) => {
        const {
          event_start: start,
          event_end: end,
          event_name: name,
          event_location: location,
        } = event;

        const { intervalInMinutes: fromMidnight, durationInMinutes: duration } =
          getEventsMath(visibleDay, start, end);

        return (
          <EventWrapper fromMidnight={`${(fromMidnight * (35/60) * 2) - 35}px`} key={index}>
            <EventInfo
              backgroundColor={getRandomColor()}
              // HELP WANTED
              duration={`${duration * (1440/840)}px`}
            >
              <p className="event-time">{`${convertDate(start)}-${convertDate(end)}`}</p>
              <p className="event-name">{name}</p>
              <p className="event-location">{location}</p>
            </EventInfo>
          </EventWrapper>
        );
      })}
    </React.Fragment>
  );
};

export default Events;
