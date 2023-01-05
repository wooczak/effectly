import styled from "styled-components";

export const EventWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  grid-template-rows: auto;
`;

export const Date = styled.div`
  background-color: transparent;
`;

export const EventInfo = styled.div.attrs((props) => ({
  backgroundColor: props.backgroundColor,
}))`
  width: calc(100% - 2rem);
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.theme.black};
  padding: 0.5em;
  border-radius: 0.5em;
`;
