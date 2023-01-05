import styled from "styled-components";

export const CalendarWrapper = styled.article`
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.darkPurple};
  padding: 2rem;
  overflow-y: scroll;
`;

export const CalendarRows = styled.div`
  background-color: transparent;
  margin-block: 1rem;
  display: grid;
  grid-template-columns: 20% 80%;
  grid-template-rows: auto;
  gap: 1rem;
  max-height: 100%:
  overflow-y: scroll;
`;
