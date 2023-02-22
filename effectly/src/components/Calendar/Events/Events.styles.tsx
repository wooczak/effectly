import styled from "styled-components";

export const EventWrapper = styled.div.attrs((props) => ({
  fromMidnight: props.fromMidnight,
}))`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  position: absolute;
  top: ${(props) => props.fromMidnight};
`;

export const Date = styled.div`
  background-color: transparent;
  width: 5ch;
`;

export const EventInfo = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
  duration: props.duration,
}))`
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.black};
  padding-inline: 0.75rem;
  padding-block: ${(props) => props.duration};
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
