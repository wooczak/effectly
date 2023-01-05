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
  margin-block: 1rem;
  max-height: 100%:
  overflow-y: scroll;
`;
