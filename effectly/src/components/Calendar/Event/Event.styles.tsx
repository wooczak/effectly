import styled from "styled-components";

export const EventWrapper = styled.div`
  display: inline-flex;
  justify-content: flex-start;
  gap: 1rem;
  background-color: transparent;
  width: auto;
  margin-block: 0.5rem;
`;

export const Date = styled.div`
  background-color: transparent;
  width: 4ch;
`;

export const EventInfo = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
}))`
  width: auto;
  background-color: transparent;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.black};
  padding: 0.75rem;
  flex-grow: 2;

  & > p {
    background-color: inherit;
    color: inherit;
  }

  .event-name {
    font-size: 1.1em;
    font-weight: 500;
  }

  .event-location {
    font-size: 0.85em;
  }

  border-radius: 0.5em;
`;
