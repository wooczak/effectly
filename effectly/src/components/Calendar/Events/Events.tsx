import { convertDate, getEventsMath } from "../helpers/events";
import getRandomColor from "../helpers/getRandomColor";
import { EventInfo } from "./Events.styles";

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
      {events.map((event: eventElemsTypes, index: number) => {
        const { event_start: start, event_end: end, event_name: name } = event;

        const { calendarGridRowStart: rowStart, calendarGridRowEnd: rowEnd } =
          getEventsMath(visibleDay, start, end);

        const isEventShort = (rowEnd as number) - (rowStart as number) < 2;

        return (
          <EventInfo
            backgroundColor={getRandomColor()}
            key={index}
            start={rowStart === 1 ? rowStart : (rowStart as number) + 1}
            end={(rowEnd as number) + 1}
            isEventShort={isEventShort}
          >
            <p
              className={`event-time ${isEventShort ? "short-event" : ""}`}
            >{`${convertDate(start)}-${convertDate(end)}`}</p>
            <p className={`event-name ${isEventShort ? "short-event" : ""}`}>
              {name}
            </p>
          </EventInfo>
        );
      })}
    </>
  );
};

export default Events;
