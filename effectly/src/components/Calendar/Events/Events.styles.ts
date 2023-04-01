import styled from "styled-components";

type IProps = {
    backgroundColor: string;
    start: number;
    end: number;
    isEventShort: boolean
}

export const EventsGrid = styled.div`
  display: grid;
  grid-column: 2 / 3;
  grid-row: 1 / 49;
  background-color: transparent;
`;

export const Date = styled.div`
  background-color: transparent;
  width: 5ch;
`;

export const EventInfo = styled.div<IProps>`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.black};
  padding: ${props => props.isEventShort ? "0" : "0.75rem"};
  grid-row-start: ${(props) => props.start};
  grid-row-end: ${(props) => props.end};
  overflow-wrap: break-word;

  & > p {
    background-color: transparent;
    color: inherit;
    margin: 0;
  }

  .event-time {
    font-size: 0.8em;
    line-height: normal;
  }

  .event-name {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1em;
    margin-top: 1rem;
  }

  .event-location {
    font-size: 0.85em;
    margin-top: -0.5em;
  }

  .short-event {
    font-size: 0.75em;
    display: inline-block;
    margin-top: 0;
  }

  border-radius: 0.5em;
`;
