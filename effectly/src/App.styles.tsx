import styled from "styled-components";

export const AppGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(5, 1fr);
  gap: 20px;
  grid-auto-flow: row;
  grid-template-areas:
    "header header header header header header"
    "calendar calendar mail mail mail mail"
    "calendar calendar mail mail mail mail"
    "calendar calendar todo todo notes notes"
    "calendar calendar todo todo timer timer";
  height: 100vh;
  min-width: 100vw;

  background-color: ${(props) => props.theme.bgPrimary};
  color: ${props => props.theme.text};
  font-family: inherit;

  .header {
    grid-area: header;
  }

  .calendar {
    grid-area: calendar;
  }

  .mail {
    grid-area: mail;
  }

  .todo {
    grid-area: todo;
  }

  .notes {
    grid-area: notes;
  }

  .timer {
    grid-area: timer;
  }
`;
