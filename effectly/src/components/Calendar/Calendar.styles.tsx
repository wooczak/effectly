import styled from "styled-components";

export const CalendarWrapper = styled.article`
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.darkPurple};
  padding: 2rem;
  overflow-y: scroll;
`;

export const EventsRows = styled.div`
  background-color: transparent;
  margin-block: 2rem;
`;

export const NoEventsInfo = styled.div`
  background-color: transparent;
  margin-top: 2rem;

  & > p {
    background-color: transparent;
    text-align: center;
  }
`;
