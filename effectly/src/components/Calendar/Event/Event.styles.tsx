import styled from "styled-components";

export const EventWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  background-color: transparent;
  margin-block: 0.9rem;
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
  padding: 0.75rem;
  line-height: 0;

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
