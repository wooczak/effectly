import styled from "styled-components";

export const AppGrid = styled.section`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: repeat(7, 1fr);
  gap: 1rem;
  padding: 3vh 3vw;
  grid-auto-flow: row;
  grid-template-areas:
    "header header header header header header header"
    "calendar calendar mail mail mail mail mail"
    "calendar calendar mail mail mail mail mail"
    "calendar calendar mail mail mail mail mail"
    "calendar calendar todo todo notes notes notes"
    "calendar calendar todo todo notes notes notes"
    "calendar calendar todo todo timer timer timer";
    "calendar calendar todo todo timer timer timer";
  height: 100vh;
  min-width: 100vw;

  background-color: ${(props) => props.theme.bgPrimary};
  color: ${props => props.theme.text};
  font-family: inherit;

  .header {
    grid-area: header;
    width: 100%;
    height: 70%;
  }

  .calendar {
    grid-area: calendar;
    width: 100%;
    height: 100%;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  .calendar::-webkit-scrollbar {
    display: none;
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
