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
    <>
      {events.map((event: eventElemsTypes, index: number | number) => {
        const { event_start: start, event_end: end, event_name: name } = event;

        const { calendarGridRow: rowStart, durationInMinutes: duration } =
          getEventsMath(visibleDay, start, end);

        return (
            <EventInfo
              backgroundColor={getRandomColor()}
              key={index}
              start={rowStart}
              end={rowStart * 2 + duration / 60}
            >
              <p className="event-time">{`${convertDate(start)}-${convertDate(
                end
              )}`}</p>
              <p className="event-name">{name}</p>
            </EventInfo>
        );
      })}
    </>
  );
};

export default Events;
