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
  display: grid;
  grid-template-rows: repeat(48, 1.5rem);
  grid-template-columns: auto;
  gap: 1rem;
  height: 900px;
`;

export const EventBlocks = styled.div`
  position: relative;
  width: 100%;
  background-color: transparent;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100vh;
`;

export const NoEventsInfo = styled.div`
  background-color: transparent;
  margin-top: 2rem;

  & > p {
    background-color: transparent;
    text-align: center;
  }
`;
