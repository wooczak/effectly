import React from "react";
import { convertDate, getEventsMath } from "../helpers/events";
import getRandomColor from "../helpers/getRandomColor";
import { EventWrapper, EventInfo, EventsGrid } from "./Events.styles";

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
    <EventsGrid>
      {events.map((event: eventElemsTypes, index: number | number, arr: []) => {
        const {
          event_start: start,
          event_end: end,
          event_name: name,
          event_location: location,
        } = event;

        const { calendarGridRow: rowStart, durationInMinutes: duration } =
          getEventsMath(visibleDay, start, end);

        return (
          <EventWrapper
            key={index}
            start={rowStart}
            end={rowStart * 2 + duration / 60}
          >
            <EventInfo backgroundColor={getRandomColor()}>
              <p className="event-time">{`${convertDate(start)}-${convertDate(
                end
              )}`}</p>
              <p className="event-name">{name}</p>
              <p className="event-location">{location}</p>
            </EventInfo>
          </EventWrapper>
        );
      })}
    </EventsGrid>
  );
};

export default Events;
