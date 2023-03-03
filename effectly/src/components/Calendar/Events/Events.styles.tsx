import styled from "styled-components";

export const EventsGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: auto;
  grid-template-rows: repeat(48, 1.5rem);
  background-color: transparent;
  gap: 1rem;
`;

export const EventWrapper = styled.div.attrs((props) => ({
  start: props.start,
  end: props.end,
}))`
  background-color: transparent;
  grid-row-start: ${(props) => props.start};
  grid-row-end: ${(props) => props.end};
`;

export const Date = styled.div`
  background-color: transparent;
  width: 5ch;
`;

export const EventInfo = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
}))`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.black};
  padding-inline: 0.75rem;
  height: 100%;
  line-height: 0;

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
