import styled from "styled-components";

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

export const EventInfo = styled.div.attrs((props) => ({
  // @ts-ignore
  backgroundColor: props.backgroundColor,
  // @ts-ignore
  start: props.start,
  // @ts-ignore
  end: props.end,
}))`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.black};
  padding: 1rem 0.75rem;
  line-height: 0;
  position: relative;
  grid-row-start: ${(props) => props.start};
  grid-row-end: ${(props) => props.end};

  & > p {
    background-color: inherit;
    color: inherit;
  }

  .event-time {
    position: absolute;
    top: 0.5rem;
    left: 0.75rem;
    font-size: 0.8em;
  }

  .event-name {
    font-size: 1.1em;
    font-weight: 500;
    line-height: 1em;
  }

  .event-location {
    font-size: 0.85em;
    margin-top: -0.5em;
  }

  border-radius: 0.5em;
`;
