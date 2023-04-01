import styled from "styled-components";

export const CalendarWrapper = styled.article`
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 10px;
  border: 1px solid ${(props) => props.theme.darkPurple};
  overflow-y: scroll;
  position: relative;
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

export const NoEventsInfo = styled.div`
  background-color: transparent;
  margin-top: 2rem;

  & > p {
    background-color: transparent;
    text-align: center;
  }
`;

export const CalendarHeader = styled.div`
  background-color: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

export const AddNewEventBtn = styled.button`
  font-size: 1em;
  background-color: transparent;
  border: 1px solid ${props => props.theme.darkPurple};
  border-radius: 0.6rem;
  padding: 0.25rem 1.5rem;
  width: auto;
  transition: all 0.25s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${props => props.theme.darkPurple};
    color: ${props => props.theme.white};
  }
`;
