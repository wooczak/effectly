import styled from "styled-components";

export const CalendarWrapper = styled.article`
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.darkPurple};
  overflow-y: scroll;
`;

export const EventsWrapper = styled.div`
  background-color: transparent;
  margin-inline: 1.25rem;
  display: flex;
  gap: 2rem;
`;

export const EventBlocks = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
`;

export const NoEventsInfo = styled.div`
  background-color: transparent;
  margin-top: 2rem;

  & > p {
    background-color: transparent;
    text-align: center;
  }
`;
